import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_11oy1hr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_11oy1hr"/>`,
		"fallback": "garden:rearrange-stroke-16",
	});
}

export default Component;
