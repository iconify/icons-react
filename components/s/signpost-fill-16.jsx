import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flawucc0z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flawucc0z"/>`,
		"fallback": "garden:signpost-fill-16",
	});
}

export default Component;
