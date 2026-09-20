import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/z9q0lfi_k.css';
import '../../css/f/f8_nqr9-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="z9q0lfi_k"/><path class="f8_nqr9-y"/></g>`,
		"fallback": "keyline-icons:shapes-sharp-two-tone",
	});
}

export default Component;
