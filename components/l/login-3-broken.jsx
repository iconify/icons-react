import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/so2izg5eh.css';
import '../../css/v/v0-ucqeuw.css';
import '../../css/j/jsl6qobau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="so2izg5eh"/><path class="v0-ucqeuw"/><path class="jsl6qobau"/></g>`,
		"fallback": "solar:login-3-broken",
	});
}

export default Component;
