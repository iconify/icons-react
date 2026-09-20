import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/ppf8jbcia.css';
import '../../css/g/g075jg9xk.css';
import '../../css/k/kup4xszbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ppf8jbcia"/><path class="g075jg9xk"/><path class="kup4xszbq"/></g>`,
		"fallback": "streamline-sharp:petri-dish-lab-equipment",
	});
}

export default Component;
