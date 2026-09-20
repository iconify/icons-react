import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6kihwb1i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6kihwb1i"/>`,
		"fallback": "raphael:page2",
	});
}

export default Component;
