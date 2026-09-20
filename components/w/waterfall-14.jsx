import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4hucmc0u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4hucmc0u"/>`,
		"fallback": "osmic:waterfall-14",
	});
}

export default Component;
