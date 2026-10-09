import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og5fw-c9e.css';
import '../../css/b/b16yxabjp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og5fw-c9e"/><path class="b16yxabjp"/>`,
		"fallback": "energy-icons:traffic-light-20-bold",
	});
}

export default Component;
