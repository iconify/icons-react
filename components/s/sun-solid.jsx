import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9f9qcklb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9f9qcklb"/>`,
		"fallback": "pixelarticons:sun-solid",
	});
}

export default Component;
