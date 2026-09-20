import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8s6fwb0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8s6fwb0u"/>`,
		"fallback": "ooui:quotes-rtl",
	});
}

export default Component;
