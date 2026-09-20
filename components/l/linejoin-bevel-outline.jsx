import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftd8t6bpl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftd8t6bpl"/>`,
		"fallback": "lsicon:linejoin-bevel-outline",
	});
}

export default Component;
