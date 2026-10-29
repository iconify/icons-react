import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s89kpjsxi.css';
import '../../css/q/q2s6zvbuh.css';
import '../../css/p/p51kjbcdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s89kpjsxi"/><path class="q2s6zvbuh wm-shadow"/><path class="p51kjbcdl"/></g>`,
		"fallback": "withicons:user-round-engrave",
	});
}

export default Component;
