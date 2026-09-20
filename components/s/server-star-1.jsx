import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y5q9onb0a.css';
import '../../css/v/v-ytwpbde.css';
import '../../css/a/amklpt1ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y5q9onb0a"/><path class="v-ytwpbde"/><path class="amklpt1ni"/></g>`,
		"fallback": "streamline-ultimate:server-star-1",
	});
}

export default Component;
