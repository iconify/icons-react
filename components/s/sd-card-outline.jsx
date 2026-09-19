import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/oi26rxbql.css';
import '../../css/q/qqdwl_d7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="oi26rxbql"/><path class="qqdwl_d7j"/></g>`,
		"fallback": "bitcoin-icons:sd-card-outline",
	});
}

export default Component;
