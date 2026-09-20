import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nym9eib8b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nym9eib8b"/>`,
		"fallback": "radix-icons:slider",
	});
}

export default Component;
