import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgv7ffjnx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgv7ffjnx"/>`,
		"fallback": "selfhst:openhands-dark",
	});
}

export default Component;
