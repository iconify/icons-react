import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipkvxz64u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipkvxz64u"/>`,
		"fallback": "dinkie-icons:keycap-command-filled",
	});
}

export default Component;
