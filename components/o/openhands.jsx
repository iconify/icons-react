import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axdgn75ci.css';
import '../../css/m/mgv7ffjnx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axdgn75ci"/><path class="mgv7ffjnx"/>`,
		"fallback": "selfhst:openhands",
	});
}

export default Component;
