import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0po_6bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0po_6bwh"/>`,
		"fallback": "si:monitor-up-line",
	});
}

export default Component;
