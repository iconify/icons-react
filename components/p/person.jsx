import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/e/e6pmp0b8v.css';
import '../../css/r/r1dv0f0sg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><circle class="e6pmp0b8v"/><path class="r1dv0f0sg"/></g>`,
		"fallback": "pepicons-pencil:person",
	});
}

export default Component;
