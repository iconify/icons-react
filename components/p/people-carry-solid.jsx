import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hadh28nsz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hadh28nsz"/>`,
		"fallback": "la:people-carry-solid",
	});
}

export default Component;
