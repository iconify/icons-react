import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jviohsbmh.css';
import '../../css/h/he3kxyb_v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jviohsbmh"/><path class="he3kxyb_v"/>`,
		"fallback": "energy-icons:lock-48-bold",
	});
}

export default Component;
