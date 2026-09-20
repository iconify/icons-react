import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imylg0bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imylg0bky"/>`,
		"fallback": "uil:sign-in-alt",
	});
}

export default Component;
