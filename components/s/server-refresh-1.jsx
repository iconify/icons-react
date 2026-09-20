import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vh29meufx.css';
import '../../css/g/g_s7kdbef.css';
import '../../css/f/fcdei6byr.css';
import '../../css/a/amklpt1ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vh29meufx"/><path class="g_s7kdbef"/><path class="fcdei6byr"/><path class="amklpt1ni"/></g>`,
		"fallback": "streamline-ultimate:server-refresh-1",
	});
}

export default Component;
