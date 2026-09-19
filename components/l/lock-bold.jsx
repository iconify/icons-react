import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/r/r99g0fbpd.css';
import '../../css/v/vynp5dscc.css';
import '../../css/t/t2u_xdb8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="r99g0fbpd"/><path class="vynp5dscc"/><path class="t2u_xdb8m"/></g>`,
		"fallback": "iconamoon:lock-bold",
	});
}

export default Component;
