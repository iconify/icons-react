import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vw_7vf50q.css';
import '../../css/z/zjjwdmb_w.css';
import '../../css/v/va-3p8pyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vw_7vf50q"/><path class="zjjwdmb_w"/><path class="va-3p8pyw"/></g>`,
		"fallback": "solar:recive-twice-square-line-duotone",
	});
}

export default Component;
