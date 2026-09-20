import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pszw-h5hu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pszw-h5hu"/>`,
		"fallback": "pixelarticons:letter-j",
	});
}

export default Component;
