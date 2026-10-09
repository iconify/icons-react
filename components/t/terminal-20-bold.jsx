import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi2c5z44e.css';
import '../../css/x/xmsbzrzmf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi2c5z44e"/><path class="xmsbzrzmf"/>`,
		"fallback": "energy-icons:terminal-20-bold",
	});
}

export default Component;
