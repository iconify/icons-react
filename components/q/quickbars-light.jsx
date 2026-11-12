import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df8texbdg.css';
import '../../css/q/q0j4_mbjy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df8texbdg"/><path class="q0j4_mbjy"/>`,
		"fallback": "selfhst:quickbars-light",
	});
}

export default Component;
