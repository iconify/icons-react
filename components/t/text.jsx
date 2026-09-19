import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px64f9bip.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px64f9bip"/>`,
		"fallback": "at-icons:text",
	});
}

export default Component;
