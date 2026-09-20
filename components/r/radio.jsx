import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iidofy_mo.css';
import '../../css/v/vl-yuhble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iidofy_mo"/><path class="vl-yuhble"/></g>`,
		"fallback": "streamline-sharp:radio",
	});
}

export default Component;
