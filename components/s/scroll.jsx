import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xa0qmzb2d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xa0qmzb2d"/>`,
		"fallback": "la:scroll",
	});
}

export default Component;
