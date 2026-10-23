import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_ady7bzh.css';
import '../../css/u/uynmvdzwm.css';
import '../../css/a/aqj41ub4x.css';
import '../../css/s/szv-3pbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_ady7bzh"/><path class="uynmvdzwm"/><path class="aqj41ub4x"/><path class="szv-3pbix"/></g>`,
		"fallback": "andrsrxn:lingerie",
	});
}

export default Component;
