import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viun7ub0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viun7ub0p"/>`,
		"fallback": "boxicons:plane-filled",
	});
}

export default Component;
