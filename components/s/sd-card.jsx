import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bga_7bc3z.css';
import '../../css/h/hjy563b8z.css';
import '../../css/h/hyb74pb9k.css';
import '../../css/i/ip9g62bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bga_7bc3z wm-shadow"/><path class="hjy563b8z wm-shadow"/><path class="hyb74pb9k"/><path class="ip9g62bcj"/></g>`,
		"fallback": "withicons-brutal:sd-card",
	});
}

export default Component;
