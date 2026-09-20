import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df8texbdg.css';
import '../../css/e/eg-j-vy9u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="df8texbdg"/><path class="eg-j-vy9u"/>`,
		"fallback": "selfhst:quickbars-light",
	});
}

export default Component;
