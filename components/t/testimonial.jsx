import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcq8mv15g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcq8mv15g"/>`,
		"fallback": "dashicons:testimonial",
	});
}

export default Component;
