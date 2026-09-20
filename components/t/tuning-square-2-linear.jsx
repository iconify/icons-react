import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/l/liycxk3hh.css';
import '../../css/n/np1e_hbeg.css';
import '../../css/o/o8b07n22g.css';
import '../../css/o/o--tz19gs.css';
import '../../css/d/dt-vgkbui.css';
import '../../css/n/nln6tjbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="liycxk3hh"/><circle transform="matrix(0 -1 -1 0 16 10)" class="np1e_hbeg"/><path class="o8b07n22g"/><path class="o--tz19gs"/><path class="dt-vgkbui"/><path class="nln6tjbcr"/></g>`,
		"fallback": "solar:tuning-square-2-linear",
	});
}

export default Component;
