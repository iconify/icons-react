import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
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
		"content": `<g class="flen3tbdj"><circle class="l_3c_lb_q"/><path class="m9mm3md2p"/></g>`,
		"fallback": "lets-icons:tumer",
	});
}

export default Component;
