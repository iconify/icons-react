import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n55t4cb-l.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n55t4cb-l"/>`,
		"fallback": "fa7-brands:schlix",
	});
}

export default Component;
