import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gearfs_pf.css';
import '../../css/j/jvkgxnnfe.css';
import '../../css/s/sii0dxybr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gearfs_pf"/><rect transform="rotate(-90 4.49 19.51)" class="jvkgxnnfe"/><path class="sii0dxybr"/></g>`,
		"fallback": "andrsrxn:watch",
	});
}

export default Component;
