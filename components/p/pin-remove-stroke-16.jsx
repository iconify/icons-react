import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jld31zsug.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jld31zsug"/>`,
		"fallback": "garden:pin-remove-stroke-16",
	});
}

export default Component;
