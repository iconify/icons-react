import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5qdc0b1t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5qdc0b1t"/>`,
		"fallback": "la:poo-storm-solid",
	});
}

export default Component;
