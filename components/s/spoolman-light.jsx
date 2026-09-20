import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr0v3sgyg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr0v3sgyg"/>`,
		"fallback": "selfhst:spoolman-light",
	});
}

export default Component;
