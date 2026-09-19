import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg609qbsi.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg609qbsi"/>`,
		"fallback": "fa-solid:truck-moving",
	});
}

export default Component;
