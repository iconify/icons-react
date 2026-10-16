import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-6y13bjo.css';
import '../../css/p/p6pekkb3x.css';
import '../../css/l/lx8o3xa9k.css';
import '../../css/y/yxeom1bds.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-6y13bjo"/><path class="p6pekkb3x"/><path class="lx8o3xa9k"/><path class="yxeom1bds"/>`,
		"fallback": "energy-icons:satellite-dish-48",
	});
}

export default Component;
