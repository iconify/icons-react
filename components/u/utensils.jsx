import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kokupk2te.css';

const viewBox = {"width":416,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kokupk2te"/>`,
		"fallback": "fa-solid:utensils",
	});
}

export default Component;
