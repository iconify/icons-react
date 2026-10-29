import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxz-9lb_k.css';
import '../../css/m/ms5g1rb3b.css';
import '../../css/p/p-q_v0bnh.css';
import '../../css/n/nh6x4acqr.css';
import '../../css/v/vjwvjrm9t.css';
import '../../css/k/k7gtqz1hg.css';
import '../../css/j/jtebt-q0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxz-9lb_k wm-shadow"/><path class="ms5g1rb3b"/><path class="p-q_v0bnh"/><path class="nh6x4acqr"/><path class="vjwvjrm9t"/><path class="k7gtqz1hg wm-shine"/><path class="jtebt-q0o"/>`,
		"fallback": "withicons-plush:map-pin",
	});
}

export default Component;
