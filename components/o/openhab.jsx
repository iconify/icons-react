import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt4y2qbvi.css';
import '../../css/v/vl-s6tbeg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt4y2qbvi"/><path class="vl-s6tbeg"/>`,
		"fallback": "selfhst:openhab",
	});
}

export default Component;
