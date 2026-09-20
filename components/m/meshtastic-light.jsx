import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_-v8b0e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_-v8b0e"/>`,
		"fallback": "selfhst:meshtastic-light",
	});
}

export default Component;
