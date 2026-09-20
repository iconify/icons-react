import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3gdu6bme.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n3gdu6bme"/>`,
		"fallback": "streamline-flex:video-close-captioning-remix",
	});
}

export default Component;
