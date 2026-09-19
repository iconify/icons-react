import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c94_hxb8l.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c94_hxb8l"/>`,
		"fallback": "fa6-solid:person-arrow-up-from-line",
	});
}

export default Component;
