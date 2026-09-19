import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1f7s7bsz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1f7s7bsz"/>`,
		"fallback": "garden:sparkle-fill-12",
	});
}

export default Component;
