import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw0ekm9xl.css';
import '../../css/n/n_y4z0b_i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw0ekm9xl"/><path class="n_y4z0b_i"/>`,
		"fallback": "ion:ios-calendar-outline",
	});
}

export default Component;
