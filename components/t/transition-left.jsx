import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kds9smf3q.css';
import '../../css/n/nrg0twbrt.css';
import '../../css/y/y_r1fbgtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kds9smf3q"/><path class="nrg0twbrt"/><path class="y_r1fbgtf"/></g>`,
		"fallback": "hugeicons:transition-left",
	});
}

export default Component;
