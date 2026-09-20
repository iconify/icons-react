import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oihh1ccpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oihh1ccpn"/>`,
		"fallback": "simple-icons:jitpack",
	});
}

export default Component;
