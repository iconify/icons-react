import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mepn4fbee.css';
import '../../css/a/ahzwwmb9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mepn4fbee"/><path class="ahzwwmb9u"/>`,
		"fallback": "energy-icons:piggy-bank-48",
	});
}

export default Component;
