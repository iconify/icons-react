import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksa2hs06o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksa2hs06o"/>`,
		"fallback": "fa7-brands:linkedin",
	});
}

export default Component;
