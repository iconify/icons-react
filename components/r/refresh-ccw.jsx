import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ngnrt3bip.css';
import '../../css/i/im44ngbpl.css';
import '../../css/q/qb_upbbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ngnrt3bip"/><path class="im44ngbpl"/><path class="qb_upbbvc"/></g>`,
		"fallback": "lucide:refresh-ccw",
	});
}

export default Component;
