import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s94g_g9qz.css';
import '../../css/k/k036or4il.css';
import '../../css/a/a890hygxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="layers-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="s94g_g9qz"/><path class="k036or4il"/><path class="a890hygxs"/></g></g>`,
		"fallback": "cuida:layers-outline",
	});
}

export default Component;
