import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hea10li5h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hea10li5h"/>`,
		"fallback": "ix:line-dash-dot-dot",
	});
}

export default Component;
