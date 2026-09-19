import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le_b2hb4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le_b2hb4c"/>`,
		"fallback": "boxicons:moon-phase-6-filled",
	});
}

export default Component;
