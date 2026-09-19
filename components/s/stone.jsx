import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d2amodb3h.css';
import '../../css/l/l7mujbi0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d2amodb3h"/><path class="l7mujbi0l"/></g>`,
		"fallback": "hugeicons:stone",
	});
}

export default Component;
