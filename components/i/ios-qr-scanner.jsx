import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d145pkbyl.css';
import '../../css/u/u1jtw-d9c.css';
import '../../css/e/ejksmvbap.css';
import '../../css/s/shvrguwxi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d145pkbyl"/><path class="u1jtw-d9c"/><path class="ejksmvbap"/><path class="shvrguwxi"/>`,
		"fallback": "ion:ios-qr-scanner",
	});
}

export default Component;
