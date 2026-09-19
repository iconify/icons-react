import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9b1e13eh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9b1e13eh"/>`,
		"fallback": "garden:translation-updated-stroke-12",
	});
}

export default Component;
