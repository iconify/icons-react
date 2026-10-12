import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u4d7vmitd.css';
import '../../css/q/qbwmvc_ha.css';
import '../../css/p/p-gs30bll.css';
import '../../css/s/sfwq5_4jw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u4d7vmitd"/><path class="qbwmvc_ha"/><rect class="p-gs30bll"/><path class="sfwq5_4jw"/></g>`,
		"fallback": "andrsrxn:shield-lock",
	});
}

export default Component;
