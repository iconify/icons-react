import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myi2hfncf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myi2hfncf"/>`,
		"fallback": "radix-icons:pin-bottom",
	});
}

export default Component;
