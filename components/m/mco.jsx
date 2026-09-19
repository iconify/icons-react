import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mudtqcb_r.css';
import '../../css/y/y3kqfbcoj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="mudtqcb_r"/><path class="y3kqfbcoj"/></g>`,
		"fallback": "cryptocurrency-color:mco",
	});
}

export default Component;
