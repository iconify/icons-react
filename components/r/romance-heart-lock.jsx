import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_11pibqc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_11pibqc"/>`,
		"fallback": "streamline-pixel:romance-heart-lock",
	});
}

export default Component;
