import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5613cbph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5613cbph"/>`,
		"fallback": "streamline-pixel:interface-essential-search-1",
	});
}

export default Component;
