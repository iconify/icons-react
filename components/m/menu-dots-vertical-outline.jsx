import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pkxx7pbdp.css';
import '../../css/h/hp_pc2tmb.css';
import '../../css/t/tmnkdvnlf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pkxx7pbdp"/><path class="hp_pc2tmb"/><path class="tmnkdvnlf"/></g>`,
		"fallback": "solar:menu-dots-vertical-outline",
	});
}

export default Component;
