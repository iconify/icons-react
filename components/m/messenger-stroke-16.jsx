import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7dld0b_r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7dld0b_r"/>`,
		"fallback": "garden:messenger-stroke-16",
	});
}

export default Component;
