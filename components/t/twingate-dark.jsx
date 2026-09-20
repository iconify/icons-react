import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l65g6bzgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l65g6bzgr"/>`,
		"fallback": "selfhst:twingate-dark",
	});
}

export default Component;
