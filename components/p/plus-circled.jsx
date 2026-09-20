import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d99mpp4pu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d99mpp4pu"/>`,
		"fallback": "radix-icons:plus-circled",
	});
}

export default Component;
