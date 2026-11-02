import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4qcw2v3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4qcw2v3v"/>`,
		"fallback": "mingcute:numbers-90-sort-ascending-line",
	});
}

export default Component;
