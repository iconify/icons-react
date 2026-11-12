import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjdhlo7vy.css';
import '../../css/a/atca9c2ie.css';
import '../../css/s/s9wdzbc7g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjdhlo7vy"/><path class="atca9c2ie"/><path class="s9wdzbc7g"/>`,
		"fallback": "selfhst:proton-lumo-light",
	});
}

export default Component;
