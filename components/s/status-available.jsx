import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/z/z_1v53bxt.css';
import '../../css/z/z854mhbck.css';
import '../../css/a/amwr5jblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="m4l-9ybuj"/><path class="z_1v53bxt"/><rect class="z854mhbck"/><path class="amwr5jblg"/></g>`,
		"fallback": "evicons:status-available",
	});
}

export default Component;
