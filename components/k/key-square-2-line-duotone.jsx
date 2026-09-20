import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ifl90v8zt.css';
import '../../css/d/ddk-_c9kd.css';
import '../../css/o/o_5pt9b1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ifl90v8zt"/><path class="ddk-_c9kd"/><path class="o_5pt9b1x"/></g>`,
		"fallback": "solar:key-square-2-line-duotone",
	});
}

export default Component;
