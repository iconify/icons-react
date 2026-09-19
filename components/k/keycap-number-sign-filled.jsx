import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndu34km1n.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndu34km1n"/>`,
		"fallback": "dinkie-icons:keycap-number-sign-filled",
	});
}

export default Component;
