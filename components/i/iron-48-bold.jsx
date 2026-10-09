import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo0h7bcsg.css';
import '../../css/r/rh51rxbog.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo0h7bcsg"/><path class="rh51rxbog"/>`,
		"fallback": "energy-icons:iron-48-bold",
	});
}

export default Component;
