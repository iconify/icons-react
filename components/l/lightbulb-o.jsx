import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0z8ph33h.css';

const viewBox = {"width":1024,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0z8ph33h"/>`,
		"fallback": "fa:lightbulb-o",
	});
}

export default Component;
