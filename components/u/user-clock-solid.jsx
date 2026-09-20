import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi2g_bcsq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi2g_bcsq"/>`,
		"fallback": "la:user-clock-solid",
	});
}

export default Component;
