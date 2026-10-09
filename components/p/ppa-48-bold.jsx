import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_pz3rxhk.css';
import '../../css/j/jhzmchb8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_pz3rxhk"/><path class="jhzmchb8z"/>`,
		"fallback": "energy-icons:ppa-48-bold",
	});
}

export default Component;
