import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyu2l48ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eyu2l48ig"/>`,
		"fallback": "streamline-logos:paypal-logo-block",
	});
}

export default Component;
