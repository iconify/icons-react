import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ozp_01nrn.css';
import '../../css/n/nk5wt5brv.css';
import '../../css/r/rsrrjow2s.css';
import '../../css/n/n-nv5yscg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ozp_01nrn"/><path class="nk5wt5brv"/><path clip-rule="evenodd" class="rsrrjow2s"/><path class="n-nv5yscg"/></g>`,
		"fallback": "healthicons:old-woman2x-outline",
	});
}

export default Component;
