import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtnf79b5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtnf79b5g"/>`,
		"fallback": "ix:notifications-filled",
	});
}

export default Component;
