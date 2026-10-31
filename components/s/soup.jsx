import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wjkbt1b-x.css';
import '../../css/a/a-r84_bep.css';
import '../../css/j/j03oh8bzx.css';
import '../../css/m/m6b9p-b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wjkbt1b-x wm-shadow"/><path class="a-r84_bep wm-shadow"/><path class="j03oh8bzx"/><path class="m6b9p-b7h"/></g>`,
		"fallback": "withicons-brutal:soup",
	});
}

export default Component;
