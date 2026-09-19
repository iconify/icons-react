import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0_qbmbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0_qbmbwp"/>`,
		"fallback": "boxicons:mountain-filled",
	});
}

export default Component;
