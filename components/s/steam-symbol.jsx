import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur7q7lb5k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur7q7lb5k"/>`,
		"fallback": "la:steam-symbol",
	});
}

export default Component;
