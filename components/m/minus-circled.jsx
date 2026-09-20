import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h96hfv_iy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h96hfv_iy"/>`,
		"fallback": "radix-icons:minus-circled",
	});
}

export default Component;
