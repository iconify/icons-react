import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwhkk5uxm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwhkk5uxm"/>`,
		"fallback": "selfhst:scratch-map-light",
	});
}

export default Component;
