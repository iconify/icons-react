import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d97ksobub.css';
import '../../css/q/qa7qb6t-z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d97ksobub"/><path class="qa7qb6t-z"/>`,
		"fallback": "energy-icons:sunrise-20",
	});
}

export default Component;
