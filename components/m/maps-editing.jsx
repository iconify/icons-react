import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tu9e6mbax.css';
import '../../css/h/hi5oigbrd.css';
import '../../css/p/pi-g2wb3c.css';
import '../../css/n/noiaeebql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="tu9e6mbax"/><path class="hi5oigbrd"/><path class="pi-g2wb3c"/><path class="noiaeebql"/></g>`,
		"fallback": "hugeicons:maps-editing",
	});
}

export default Component;
