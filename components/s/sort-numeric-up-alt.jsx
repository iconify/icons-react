import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyser73hu.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyser73hu"/>`,
		"fallback": "fa-solid:sort-numeric-up-alt",
	});
}

export default Component;
