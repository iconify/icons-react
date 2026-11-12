import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp440nu6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yp440nu6n"/>`,
		"fallback": "selfhst:medassist-light",
	});
}

export default Component;
