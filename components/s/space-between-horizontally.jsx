import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2ayqabna.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2ayqabna"/>`,
		"fallback": "radix-icons:space-between-horizontally",
	});
}

export default Component;
