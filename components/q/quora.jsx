import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnl4fvoaq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnl4fvoaq"/>`,
		"fallback": "fa7-brands:quora",
	});
}

export default Component;
