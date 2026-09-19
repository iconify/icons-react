import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu0ox2bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu0ox2bor"/>`,
		"fallback": "boxicons:moon-phase-4",
	});
}

export default Component;
