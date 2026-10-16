import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ob8sbdr.css';
import '../../css/k/kux8a1jyn.css';
import '../../css/a/aho46rbzr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ob8sbdr"/><path class="kux8a1jyn"/><path class="aho46rbzr"/>`,
		"fallback": "energy-icons:lidar-20-bold",
	});
}

export default Component;
