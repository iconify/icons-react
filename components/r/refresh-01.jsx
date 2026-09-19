import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jvgw14sbm.css';
import '../../css/d/d7rkzfbgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jvgw14sbm"/><path class="d7rkzfbgr"/></g>`,
		"fallback": "hugeicons:refresh-01",
	});
}

export default Component;
