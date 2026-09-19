import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/naa9j1b7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="naa9j1b7i"/>`,
		"fallback": "griddy-icons:video-camera-off",
	});
}

export default Component;
