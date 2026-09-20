import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzqhjqb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzqhjqb3t"/>`,
		"fallback": "reicon:ruler-pen2-filled",
	});
}

export default Component;
