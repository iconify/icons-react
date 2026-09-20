import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjx3ab04x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjx3ab04x"/>`,
		"fallback": "keyline-icons:square-more-vertical-fill",
	});
}

export default Component;
