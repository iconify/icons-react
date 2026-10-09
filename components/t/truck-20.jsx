import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm0dtlbqb.css';
import '../../css/w/w8d7b6b8r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm0dtlbqb"/><path class="w8d7b6b8r"/>`,
		"fallback": "energy-icons:truck-20",
	});
}

export default Component;
