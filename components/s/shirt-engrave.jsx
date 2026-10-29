import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kp3j7tbra.css';
import '../../css/p/pdw9ohb6s.css';
import '../../css/w/w_97-qb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kp3j7tbra"/><path class="pdw9ohb6s wm-shadow"/><path class="w_97-qb7a"/></g>`,
		"fallback": "withicons:shirt-engrave",
	});
}

export default Component;
