import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m59fnwbmz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m59fnwbmz"/>`,
		"fallback": "dinkie-icons:lock-filled",
	});
}

export default Component;
