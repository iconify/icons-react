import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlty2ozxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlty2ozxy"/>`,
		"fallback": "pixelarticons:letter-r-circle",
	});
}

export default Component;
