import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_57g2bsa.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_57g2bsa"/>`,
		"fallback": "memory:sword",
	});
}

export default Component;
