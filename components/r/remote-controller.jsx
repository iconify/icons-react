import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sumn4_f2z.css';
import '../../css/i/iz-ucxb1g.css';
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
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sumn4_f2z"/><path class="iz-ucxb1g"/><circle class="uu9-2jbld"/><path class="ay82iv7eb"/></g>`,
		"fallback": "andrsrxn:remote-controller",
	});
}

export default Component;
