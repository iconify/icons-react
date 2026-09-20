import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nulm-216m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nulm-216m"/>`,
		"fallback": "selfhst:omniroute-dark",
	});
}

export default Component;
