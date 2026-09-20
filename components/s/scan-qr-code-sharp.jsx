import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vwu5wvbuq.css';
import '../../css/g/gowt8l0oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vwu5wvbuq"/><path class="gowt8l0oy"/></g>`,
		"fallback": "keyline-icons:scan-qr-code-sharp",
	});
}

export default Component;
