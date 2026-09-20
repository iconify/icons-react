import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-hxs5bex.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-hxs5bex"/>`,
		"fallback": "streamline-block:text-formatting-align-right",
	});
}

export default Component;
