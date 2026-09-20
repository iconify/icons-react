import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j3me3zb-h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j3me3zb-h"/>`,
		"fallback": "la:searchengin",
	});
}

export default Component;
