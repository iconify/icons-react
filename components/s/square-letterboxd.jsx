import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5b61ccaa.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5b61ccaa"/>`,
		"fallback": "fa6-brands:square-letterboxd",
	});
}

export default Component;
