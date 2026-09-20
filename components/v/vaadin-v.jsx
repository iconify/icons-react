import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhrvo3buz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhrvo3buz"/>`,
		"fallback": "vaadin:vaadin-v",
	});
}

export default Component;
