import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e20aw1nql.css';
import '../../css/i/iq5py93ow.css';
import '../../css/h/h_bkvkb-x.css';
import '../../css/w/wa65fi0wq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e20aw1nql"/><path clip-rule="evenodd" class="iq5py93ow"/><path clip-rule="evenodd" class="h_bkvkb-x"/><path class="wa65fi0wq"/></g>`,
		"fallback": "healthicons:rdt-result-neg-outline",
	});
}

export default Component;
