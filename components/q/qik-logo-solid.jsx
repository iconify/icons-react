import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rygsn1wuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rygsn1wuj"/>`,
		"fallback": "streamline-logos:qik-logo-solid",
	});
}

export default Component;
