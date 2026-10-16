import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1pq6-bwj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x1pq6-bwj"/>`,
		"fallback": "energy-icons:stairs-20",
	});
}

export default Component;
