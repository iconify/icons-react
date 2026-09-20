import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q90m5qb9y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q90m5qb9y"/>`,
		"fallback": "pinhead:utility-shutoff",
	});
}

export default Component;
