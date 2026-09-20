import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyr36-bkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyr36-bkf"/>`,
		"fallback": "pixelarticons:sunglasses",
	});
}

export default Component;
