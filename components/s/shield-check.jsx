import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjuqs752m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjuqs752m"/>`,
		"fallback": "keyline-icons:shield-check",
	});
}

export default Component;
