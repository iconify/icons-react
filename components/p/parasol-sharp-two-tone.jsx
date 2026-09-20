import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e7qr6bb7e.css';
import '../../css/n/nn971vb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e7qr6bb7e"/><path class="nn971vb1z"/></g>`,
		"fallback": "keyline-icons:parasol-sharp-two-tone",
	});
}

export default Component;
