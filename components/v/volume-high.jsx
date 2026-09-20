import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrxs8yb0d.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrxs8yb0d"/>`,
		"fallback": "memory:volume-high",
	});
}

export default Component;
