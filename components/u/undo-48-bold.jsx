import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3w_jjzoh.css';
import '../../css/f/fu6xpoo5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3w_jjzoh"/><path class="fu6xpoo5r"/>`,
		"fallback": "energy-icons:undo-48-bold",
	});
}

export default Component;
