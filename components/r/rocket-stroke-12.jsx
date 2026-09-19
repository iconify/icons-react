import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap6k9bbxk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap6k9bbxk"/>`,
		"fallback": "garden:rocket-stroke-12",
	});
}

export default Component;
