import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/htzbs2dgx.css';
import '../../css/c/ct09g_grs.css';
import '../../css/i/iaqb0cbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="htzbs2dgx"/><path class="ct09g_grs wm-a"/><path class="iaqb0cbni wm-s"/></g>`,
		"fallback": "withicons:pichkari-solid",
	});
}

export default Component;
