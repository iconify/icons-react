import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shdx1tgjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shdx1tgjr"/>`,
		"fallback": "majesticons:undo-line",
	});
}

export default Component;
