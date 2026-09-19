import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i56jn-xon.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i56jn-xon"/>`,
		"fallback": "catppuccin:roblox",
	});
}

export default Component;
