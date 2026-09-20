import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybzc4rbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybzc4rbbb"/>`,
		"fallback": "pixelarticons:library",
	});
}

export default Component;
