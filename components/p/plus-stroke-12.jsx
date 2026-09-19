import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erhjj-75b.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erhjj-75b"/>`,
		"fallback": "garden:plus-stroke-12",
	});
}

export default Component;
