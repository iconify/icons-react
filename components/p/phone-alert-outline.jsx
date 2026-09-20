import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfamm1_av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfamm1_av"/>`,
		"fallback": "mdi:phone-alert-outline",
	});
}

export default Component;
