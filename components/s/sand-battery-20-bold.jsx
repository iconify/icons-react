import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-akp5bab.css';
import '../../css/c/cl0ksvb4b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-akp5bab"/><path class="cl0ksvb4b"/>`,
		"fallback": "energy-icons:sand-battery-20-bold",
	});
}

export default Component;
