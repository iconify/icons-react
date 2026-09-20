import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m96_mw9qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m96_mw9qr"/>`,
		"fallback": "solar:like-outline",
	});
}

export default Component;
