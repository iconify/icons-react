import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/noywb7vvo.css';
import '../../css/o/obfu5obql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="noywb7vvo"/><path class="obfu5obql"/>`,
		"fallback": "selfhst:waydroid-light",
	});
}

export default Component;
