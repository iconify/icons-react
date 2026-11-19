import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_k0vubee.css';
import '../../css/f/fwef37bwx.css';
import '../../css/u/uo1jqqxzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a_k0vubee"/><path class="fwef37bwx"/><path class="uo1jqqxzl"/></g>`,
		"fallback": "andrsrxn:star-square",
	});
}

export default Component;
