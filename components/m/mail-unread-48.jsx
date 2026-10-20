import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjbzyzbdn.css';
import '../../css/r/rszikibod.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjbzyzbdn"/><path class="rszikibod"/>`,
		"fallback": "energy-icons:mail-unread-48",
	});
}

export default Component;
