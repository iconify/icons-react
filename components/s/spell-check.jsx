import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y7hkb8btc.css';
import '../../css/k/k1j_3lqxj.css';
import '../../css/y/y9nrp2lfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="y7hkb8btc"/><path class="k1j_3lqxj"/><path class="wm-s y9nrp2lfs"/></g>`,
		"fallback": "withicons-retro:spell-check",
	});
}

export default Component;
