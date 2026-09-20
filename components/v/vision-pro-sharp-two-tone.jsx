import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/oq3mrnbul.css';
import '../../css/n/nk9w0hbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="oq3mrnbul"/><path class="nk9w0hbdg"/></g>`,
		"fallback": "keyline-icons:vision-pro-sharp-two-tone",
	});
}

export default Component;
