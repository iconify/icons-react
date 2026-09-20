import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koj4gublb.css';
import '../../css/o/ofw11lk8d.css';
import '../../css/y/y6rebfbtb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koj4gublb"/><path class="ofw11lk8d"/><path class="y6rebfbtb"/>`,
		"fallback": "selfhst:password-pusher",
	});
}

export default Component;
