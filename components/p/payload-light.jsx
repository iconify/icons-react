import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l97ms5bsb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l97ms5bsb"/>`,
		"fallback": "selfhst:payload-light",
	});
}

export default Component;
