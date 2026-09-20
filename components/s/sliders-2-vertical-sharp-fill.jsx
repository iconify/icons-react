import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qbi2l1bgh.css';
import '../../css/h/h39o2mrll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="qbi2l1bgh"/><path class="h39o2mrll"/></g>`,
		"fallback": "keyline-icons:sliders-2-vertical-sharp-fill",
	});
}

export default Component;
