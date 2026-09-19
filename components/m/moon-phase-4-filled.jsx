import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1y50gb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1y50gb0e"/>`,
		"fallback": "boxicons:moon-phase-4-filled",
	});
}

export default Component;
