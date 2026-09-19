import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy3iztbmk.css';
import '../../css/s/sulj6_b9o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy3iztbmk"/><path class="sulj6_b9o"/>`,
		"fallback": "ion:telescope-outline",
	});
}

export default Component;
