import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr72fibsk.css';
import '../../css/v/v3y0e9ubk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr72fibsk"/><path class="v3y0e9ubk"/>`,
		"fallback": "carbon:pending-filled",
	});
}

export default Component;
