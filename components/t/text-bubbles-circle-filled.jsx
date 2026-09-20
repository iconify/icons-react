import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hjzzbm_-c.css';
import '../../css/a/ajoemkl3n.css';
import '../../css/p/pj2wawb7v.css';
import '../../css/i/ikp8k8bfm.css';
import '../../css/k/kspoj7vnd.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hjzzbm_-c"/><path class="ajoemkl3n"/><path class="pj2wawb7v"/><path class="ikp8k8bfm"/><path clip-rule="evenodd" class="kspoj7vnd"/></g>`,
		"fallback": "pepicons-print:text-bubbles-circle-filled",
	});
}

export default Component;
