import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/ddh_1r-5t.css';
import '../../css/l/l46s5-5lc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ddh_1r-5t"/><path class="l46s5-5lc"/></g>`,
		"fallback": "hugeicons:root-second-bracket",
	});
}

export default Component;
