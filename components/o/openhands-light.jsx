import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgy0job2h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgy0job2h"/>`,
		"fallback": "selfhst:openhands-light",
	});
}

export default Component;
