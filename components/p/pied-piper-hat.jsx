import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oib00zb8z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oib00zb8z"/>`,
		"fallback": "la:pied-piper-hat",
	});
}

export default Component;
