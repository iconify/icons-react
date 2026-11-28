import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tei1iabhn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v3zt_xb4i.css';
import '../../css/q/q-3l8kb_v.css';
import '../../css/c/c5t42okpd.css';
import '../../css/g/g2-s0mbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tei1iabhn"/><g class="dt0cm9dhy primary"><path class="v3zt_xb4i"/><path class="q-3l8kb_v"/><path class="c5t42okpd"/><path class="g2-s0mbvt"/></g>`,
		"fallback": "iconaut:monitor-cog-duo",
	});
}

export default Component;
