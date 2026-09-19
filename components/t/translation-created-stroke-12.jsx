import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7baw6bnm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7baw6bnm"/>`,
		"fallback": "garden:translation-created-stroke-12",
	});
}

export default Component;
