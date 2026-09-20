import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6bk53brd.css';
import '../../css/a/ab_ydd6ir.css';

const viewBox = {"width":950,"height":260.203};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z6bk53brd"/><path class="ab_ydd6ir"/></g>`,
		"fallback": "thesvg-color:reuters",
	});
}

export default Component;
