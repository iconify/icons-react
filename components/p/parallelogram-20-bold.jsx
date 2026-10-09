import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaye-t6-r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaye-t6-r"/>`,
		"fallback": "energy-icons:parallelogram-20-bold",
	});
}

export default Component;
