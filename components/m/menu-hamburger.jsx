import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr-_q9brg.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr-_q9brg"/>`,
		"fallback": "system-uicons:menu-hamburger",
	});
}

export default Component;
