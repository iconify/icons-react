import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7s6tsbkb.css';
import '../../css/n/n-u2bhuwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7s6tsbkb"/><path class="n-u2bhuwf"/>`,
		"fallback": "eva:minus-square-outline",
	});
}

export default Component;
