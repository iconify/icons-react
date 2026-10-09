import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovcrl6b2y.css';
import '../../css/a/a9_-6201d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovcrl6b2y"/><path class="a9_-6201d"/>`,
		"fallback": "energy-icons:map-route-20",
	});
}

export default Component;
