import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdvp-0bcn.css';
import '../../css/h/hbbh9n7le.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdvp-0bcn"/><path class="hbbh9n7le"/>`,
		"fallback": "energy-icons:water-butt-48",
	});
}

export default Component;
