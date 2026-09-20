import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxpxfkt8i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxpxfkt8i"/>`,
		"fallback": "streamline-block:nature-leaf",
	});
}

export default Component;
