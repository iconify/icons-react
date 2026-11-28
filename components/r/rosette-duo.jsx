import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6m8e3bqb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ey2zvwwdt.css';
import '../../css/o/of57k3czr.css';
import '../../css/k/kxcnz1a6x.css';
import '../../css/p/pueyysbpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary x6m8e3bqb"/><g class="dt0cm9dhy primary"><path class="ey2zvwwdt"/><path class="of57k3czr"/><path class="kxcnz1a6x"/><path class="pueyysbpv"/></g>`,
		"fallback": "iconaut:rosette-duo",
	});
}

export default Component;
