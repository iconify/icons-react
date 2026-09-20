import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s02ruwbew.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s02ruwbew"/>`,
		"fallback": "pinhead:motorcycle-and-shekel",
	});
}

export default Component;
