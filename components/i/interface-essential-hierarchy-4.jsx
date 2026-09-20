import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liim8eenz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liim8eenz"/>`,
		"fallback": "streamline-pixel:interface-essential-hierarchy-4",
	});
}

export default Component;
