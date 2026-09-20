import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zo_ii94vh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zo_ii94vh"/>`,
		"fallback": "la:user-check",
	});
}

export default Component;
