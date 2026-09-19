import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/ks0d2dpfw.css';
import '../../css/v/v-oh1e5em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ks0d2dpfw"/><path class="v-oh1e5em"/></g>`,
		"fallback": "iconoir:pants-pockets",
	});
}

export default Component;
