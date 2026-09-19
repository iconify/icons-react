import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmfj29_ra.css';
import '../../css/d/dv916pbgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmfj29_ra"/><path class="dv916pbgy"/>`,
		"fallback": "cil:sort-descending",
	});
}

export default Component;
