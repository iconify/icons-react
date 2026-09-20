import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdyoa5b9x.css';
import '../../css/o/oy550fbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdyoa5b9x"/><path class="oy550fbqk"/>`,
		"fallback": "streamline-ultimate:notes-checklist-flip-bold",
	});
}

export default Component;
