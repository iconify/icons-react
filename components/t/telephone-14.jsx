import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4-bzk02u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4-bzk02u"/>`,
		"fallback": "osmic:telephone-14",
	});
}

export default Component;
