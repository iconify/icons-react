import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0g6_5b-r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0g6_5b-r"/>`,
		"fallback": "pinhead:louisiana",
	});
}

export default Component;
