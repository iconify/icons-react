import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhrcmmbaj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u_eejuguq.css';
import '../../css/o/o746-qb_q.css';
import '../../css/c/c6u2nfiaa.css';
import '../../css/i/ig8ghpnvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vhrcmmbaj"/><g class="dt0cm9dhy primary"><path class="u_eejuguq"/><path class="o746-qb_q"/><path class="c6u2nfiaa"/><path class="ig8ghpnvq"/></g>`,
		"fallback": "iconaut:motorcycle-duo",
	});
}

export default Component;
