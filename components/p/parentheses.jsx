import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg_p6bmic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg_p6bmic"/>`,
		"fallback": "keyline-icons:parentheses",
	});
}

export default Component;
