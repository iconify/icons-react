import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou09uufas.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou09uufas"/>`,
		"fallback": "temaki:waterskiing",
	});
}

export default Component;
