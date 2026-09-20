import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dn7-o7nhg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dn7-o7nhg"/>`,
		"fallback": "radix-icons:timer",
	});
}

export default Component;
