import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bennyachr.css';
import '../../css/e/euayzowny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bennyachr"/><path class="euayzowny"/></g>`,
		"fallback": "flowbite:qr-code-outline",
	});
}

export default Component;
