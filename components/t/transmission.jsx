import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp5eb4clg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp5eb4clg"/>`,
		"fallback": "simple-icons:transmission",
	});
}

export default Component;
