import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmm9vsykl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmm9vsykl"/>`,
		"fallback": "boxicons:magnet-filled",
	});
}

export default Component;
