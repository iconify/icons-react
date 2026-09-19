import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zb1m9tbsf.css';
import '../../css/b/byagrhoub.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zb1m9tbsf"/><path class="byagrhoub"/></g>`,
		"fallback": "hugeicons:log-in",
	});
}

export default Component;
