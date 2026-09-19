import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/n_q1vmbzx.css';
import '../../css/f/f6uz80bop.css';
import '../../css/f/fek8ae9up.css';
import '../../css/f/fqkzc1bye.css';
import '../../css/c/cz8_hfb1l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="n_q1vmbzx"/><path class="f6uz80bop"/><path class="fek8ae9up"/><path class="fqkzc1bye"/><path class="cz8_hfb1l"/></g>`,
		"fallback": "icon-park:preview-close",
	});
}

export default Component;
