import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/d/ds_zifb7n.css';
import '../../css/r/rwmcjfboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wf89k6buf"/><path class="ds_zifb7n"/><path class="rwmcjfboi"/></g>`,
		"fallback": "solar:text-bold-square-line-duotone",
	});
}

export default Component;
