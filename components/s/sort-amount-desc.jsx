import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fe1v0h6hk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fe1v0h6hk"/>`,
		"fallback": "fa7-solid:sort-amount-desc",
	});
}

export default Component;
