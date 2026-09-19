import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m0gw-37qb.css';
import '../../css/w/wp-7yjsgz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m0gw-37qb"/><path class="wp-7yjsgz"/></g>`,
		"fallback": "cryptocurrency-color:link",
	});
}

export default Component;
