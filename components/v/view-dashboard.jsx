import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gepffur1r.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gepffur1r"/>`,
		"fallback": "zmdi:view-dashboard",
	});
}

export default Component;
