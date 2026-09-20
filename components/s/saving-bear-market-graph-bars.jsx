import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q46m0ib_p.css';
import '../../css/e/eyw_xr3xg.css';
import '../../css/h/hwmls0boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q46m0ib_p"/><path class="eyw_xr3xg"/><path class="hwmls0boq"/></g>`,
		"fallback": "streamline-freehand:saving-bear-market-graph-bars",
	});
}

export default Component;
