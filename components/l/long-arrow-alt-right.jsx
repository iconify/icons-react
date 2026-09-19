import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cts1vkb_l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cts1vkb_l"/>`,
		"fallback": "fa7-solid:long-arrow-alt-right",
	});
}

export default Component;
