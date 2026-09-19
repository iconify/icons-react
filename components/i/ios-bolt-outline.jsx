import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqko1numn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqko1numn"/>`,
		"fallback": "ion:ios-bolt-outline",
	});
}

export default Component;
