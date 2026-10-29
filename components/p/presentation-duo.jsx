import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/plu2cmxzn.css';
import '../../css/k/klwegybqt.css';
import '../../css/c/camcnmb1b.css';
import '../../css/t/ti_g04nlw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="plu2cmxzn"/><path class="klwegybqt wm-a"/><path class="camcnmb1b"/><path class="ti_g04nlw wm-a"/></g>`,
		"fallback": "withicons:presentation-duo",
	});
}

export default Component;
