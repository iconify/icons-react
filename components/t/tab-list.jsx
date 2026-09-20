import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pio34ebwk.css';
import '../../css/u/u6gq1rbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="pio34ebwk"/><path vector-effect="non-scaling-stroke" class="u6gq1rbmi"/></g>`,
		"fallback": "wordpress:tab-list",
	});
}

export default Component;
