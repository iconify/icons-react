import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9x5jkb7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9x5jkb7j"/>`,
		"fallback": "mdi-light:nfc-variant",
	});
}

export default Component;
