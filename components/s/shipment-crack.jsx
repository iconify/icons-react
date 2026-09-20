import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ol-_1w5bd.css';
import '../../css/w/w-se6kbdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ol-_1w5bd"/><path class="w-se6kbdl"/></g>`,
		"fallback": "streamline-ultimate:shipment-crack",
	});
}

export default Component;
