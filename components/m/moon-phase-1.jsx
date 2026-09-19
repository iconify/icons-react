import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhg0jyb_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhg0jyb_u"/>`,
		"fallback": "boxicons:moon-phase-1",
	});
}

export default Component;
