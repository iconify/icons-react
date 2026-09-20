import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/ip3764bcx.css';
import '../../css/j/j8sitxfqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ip3764bcx"/><path class="j8sitxfqk"/></g>`,
		"fallback": "keyline-icons:thumbs-up-sharp-two-tone",
	});
}

export default Component;
