import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce3c8rxfz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ce3c8rxfz"/>`,
		"fallback": "streamline-block:money-wallet",
	});
}

export default Component;
