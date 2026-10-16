import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3cvfuttx.css';
import '../../css/g/g5-uz2b5k.css';
import '../../css/u/uu9-2jbld.css';
import '../../css/a/ay82iv7eb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a3cvfuttx"/><rect transform="matrix(0 -1 -1 0 19.24 22.27)" class="g5-uz2b5k"/><circle class="uu9-2jbld"/><path class="ay82iv7eb"/></g>`,
		"fallback": "andrsrxn:remote-controller",
	});
}

export default Component;
