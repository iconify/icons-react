import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-eaap4bd.css';
import '../../css/f/f86310bce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-eaap4bd"/><path class="f86310bce"/>`,
		"fallback": "selfhst:valetudo",
	});
}

export default Component;
