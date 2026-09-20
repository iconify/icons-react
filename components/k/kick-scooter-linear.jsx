import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crtk_e-gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crtk_e-gx"/>`,
		"fallback": "solar:kick-scooter-linear",
	});
}

export default Component;
