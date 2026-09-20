import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ugzgtbblb.css';
import '../../css/n/nrq1a9bgn.css';
import '../../css/v/vuq_pubgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ugzgtbblb"/><path class="nrq1a9bgn"/><path clip-rule="evenodd" class="vuq_pubgw"/></g>`,
		"fallback": "solar:washing-machine-bold",
	});
}

export default Component;
