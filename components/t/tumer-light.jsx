import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l_3c_lb_q.css';
import '../../css/m/m9mm3md2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="l_3c_lb_q"/><path class="m9mm3md2p"/></g>`,
		"fallback": "lets-icons:tumer-light",
	});
}

export default Component;
