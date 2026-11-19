import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bua_egt4m.css';
import '../../css/a/apxe62bjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bua_egt4m"/><path class="apxe62bjm"/></g>`,
		"fallback": "andrsrxn:panels-horizontal",
	});
}

export default Component;
