import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap7k5ib6d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap7k5ib6d"/>`,
		"fallback": "selfhst:step-ca-light",
	});
}

export default Component;
