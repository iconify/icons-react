import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qjha2ib0l.css';
import '../../css/e/ey1xi0m0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qjha2ib0l"/><path class="ey1xi0m0j"/></g>`,
		"fallback": "streamline-freehand:saving-bull-market-graph-bars",
	});
}

export default Component;
