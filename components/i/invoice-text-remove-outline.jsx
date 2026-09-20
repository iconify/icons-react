import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0fmn2bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0fmn2bpz"/>`,
		"fallback": "mdi:invoice-text-remove-outline",
	});
}

export default Component;
