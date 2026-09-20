import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwn_5jwul.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwn_5jwul"/>`,
		"fallback": "radix-icons:opacity",
	});
}

export default Component;
