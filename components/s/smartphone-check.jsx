import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3ojn9owv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3ojn9owv"/>`,
		"fallback": "keyline-icons:smartphone-check",
	});
}

export default Component;
