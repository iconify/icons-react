import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/w/whpf26m9n.css';
import '../../css/v/v-rj1wiga.css';
import '../../css/y/y_kbm9bnk.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/a0zji3iak.css';
import '../../css/r/r3k27abxv.css';
import '../../css/u/ur1f9l1qm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="whpf26m9n"/><circle class="v-rj1wiga"/><path class="y_kbm9bnk"/></g><g class="ij2x_72vy"><path class="a0zji3iak"/><circle class="r3k27abxv"/><path class="ur1f9l1qm"/></g>`,
		"fallback": "openmoji:toggle-button",
	});
}

export default Component;
