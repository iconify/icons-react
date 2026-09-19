import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgwm_-bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgwm_-bio"/>`,
		"fallback": "gg:menu-motion",
	});
}

export default Component;
