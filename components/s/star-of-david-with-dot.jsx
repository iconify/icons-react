import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nepl70bdu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nepl70bdu"/>`,
		"fallback": "pinhead:star-of-david-with-dot",
	});
}

export default Component;
