import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlovz5nrx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlovz5nrx"/>`,
		"fallback": "pinhead:star-of-david-filled-outline",
	});
}

export default Component;
