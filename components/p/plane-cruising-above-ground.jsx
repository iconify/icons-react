import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhg3wg2ot.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhg3wg2ot"/>`,
		"fallback": "pinhead:plane-cruising-above-ground",
	});
}

export default Component;
