import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaj4x7b0q.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaj4x7b0q"/>`,
		"fallback": "garden:phone-call-end-stroke-12",
	});
}

export default Component;
