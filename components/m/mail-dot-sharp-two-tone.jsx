import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/sv5ssrbji.css';
import '../../css/i/incuzmb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="sv5ssrbji"/><path class="incuzmb7x"/></g>`,
		"fallback": "keyline-icons:mail-dot-sharp-two-tone",
	});
}

export default Component;
