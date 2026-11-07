import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdob9slbu.css';
import '../../css/v/v3h9yd14e.css';
import '../../css/h/ht8rgl0oc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdob9slbu"/><path class="v3h9yd14e"/><path class="ht8rgl0oc"/>`,
		"fallback": "solar:to-pip-bold-duotone",
	});
}

export default Component;
