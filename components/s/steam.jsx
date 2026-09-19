import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylofclr8a.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylofclr8a"/>`,
		"fallback": "fa:steam",
	});
}

export default Component;
