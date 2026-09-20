import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5cq5vwjb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p5cq5vwjb"/>`,
		"fallback": "oui:nav-service-map",
	});
}

export default Component;
