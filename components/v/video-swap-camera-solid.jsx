import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yghf7gbjb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yghf7gbjb"/>`,
		"fallback": "streamline:video-swap-camera-solid",
	});
}

export default Component;
