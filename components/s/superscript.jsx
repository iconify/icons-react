import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p0a84fdjs.css';
import '../../css/t/tmm-wxbqr.css';
import '../../css/a/a-c93bb9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="p0a84fdjs wm-shadow"/><path class="tmm-wxbqr wm-shadow"/><path class="a-c93bb9g"/></g>`,
		"fallback": "withicons-brutal:superscript",
	});
}

export default Component;
