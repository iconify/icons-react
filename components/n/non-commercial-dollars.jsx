import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yo512ub_k.css';
import '../../css/g/gv3m1vp7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yo512ub_k"/><path class="gv3m1vp7d"/></g>`,
		"fallback": "streamline-sharp:non-commercial-dollars",
	});
}

export default Component;
