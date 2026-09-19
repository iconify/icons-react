import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/k/kasrvtb-d.css';
import '../../css/r/rf0bxrb0x.css';
import '../../css/j/jkaoqkntv.css';
import '../../css/u/ub10r6bni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><circle class="kasrvtb-d"/><circle class="rf0bxrb0x"/><path class="jkaoqkntv"/><path class="ub10r6bni"/></g>`,
		"fallback": "icon-park:transform",
	});
}

export default Component;
