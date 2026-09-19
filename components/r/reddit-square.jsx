import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll__7fb6w.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll__7fb6w"/>`,
		"fallback": "fa-brands:reddit-square",
	});
}

export default Component;
