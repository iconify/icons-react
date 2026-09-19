import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2u2u_bjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2u2u_bjz"/>`,
		"fallback": "griddy-icons:solar-energy-filled",
	});
}

export default Component;
