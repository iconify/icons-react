import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ravkfh2se.css';
import '../../css/z/zfc2xdsph.css';
import '../../css/x/xu7mjod1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-180 9.35 21.28)" class="ravkfh2se"/><rect transform="rotate(-180 21.27 21.28)" class="zfc2xdsph"/><path class="xu7mjod1n"/></g>`,
		"fallback": "andrsrxn:panel-left",
	});
}

export default Component;
