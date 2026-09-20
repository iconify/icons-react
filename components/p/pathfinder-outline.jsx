import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kfti2lb8m.css';
import '../../css/k/khfvsobvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kfti2lb8m"/><path class="khfvsobvn"/></g>`,
		"fallback": "streamline-sharp:pathfinder-outline",
	});
}

export default Component;
