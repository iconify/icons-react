import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no7qesbcb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no7qesbcb"/>`,
		"fallback": "catppuccin:json",
	});
}

export default Component;
