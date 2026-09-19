import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j4e5ivbbk.css';
import '../../css/i/ik2agtbvx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="j4e5ivbbk"/><path class="ik2agtbvx"/></g>`,
		"fallback": "cryptocurrency-color:rcn",
	});
}

export default Component;
