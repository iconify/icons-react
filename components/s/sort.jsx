import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/dotbkuh7v.css';
import '../../css/c/ct5fwxbqh.css';
import '../../css/p/popa48f_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="dotbkuh7v wm-shadow"/><path class="ct5fwxbqh wm-shadow"/><path class="popa48f_v"/></g>`,
		"fallback": "withicons-brutal:sort",
	});
}

export default Component;
