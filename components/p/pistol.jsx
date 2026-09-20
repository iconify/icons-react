import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1kn_kt2k.css';
import '../../css/v/vivtzcqvh.css';
import '../../css/p/p7a19mbmd.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/k/komkke12x.css';
import '../../css/y/y8sfjbbfl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1kn_kt2k"/><path class="vivtzcqvh"/><path class="p7a19mbmd"/><g class="ij2x_72vy"><path class="komkke12x"/><path class="y8sfjbbfl"/></g>`,
		"fallback": "openmoji:pistol",
	});
}

export default Component;
