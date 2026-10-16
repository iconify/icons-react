import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g29p-d96q.css';
import '../../css/y/ym1dumb8f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g29p-d96q"/><path class="ym1dumb8f"/>`,
		"fallback": "energy-icons:notebook-pen-20-bold",
	});
}

export default Component;
