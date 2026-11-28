import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp566-geb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hp566-geb"/>`,
		"fallback": "noviair:utensils-check",
	});
}

export default Component;
