import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w0l1u8rdw.css';
import '../../css/h/h7zioyf4u.css';
import '../../css/f/frl_d4bif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="w0l1u8rdw wm-shadow"/><path class="h7zioyf4u wm-shadow"/><path class="frl_d4bif"/></g>`,
		"fallback": "withicons-brutal:scale",
	});
}

export default Component;
