import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq15uw1-o.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iq15uw1-o"/>`,
		"fallback": "radix-icons:pilcrow",
	});
}

export default Component;
