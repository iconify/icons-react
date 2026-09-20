import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cum7zpodp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cum7zpodp"/>`,
		"fallback": "streamline-logos:tinder-logo-block",
	});
}

export default Component;
