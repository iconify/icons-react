import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re9pfrb8l.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re9pfrb8l"/>`,
		"fallback": "system-uicons:link-vertical",
	});
}

export default Component;
