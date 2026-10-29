import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kuxygd_gr.css';
import '../../css/n/n35k4vbev.css';
import '../../css/p/pfgi2nbvf.css';
import '../../css/w/wrc723bxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kuxygd_gr"/><path class="n35k4vbev wm-a"/><path class="pfgi2nbvf"/><path class="wm-a wrc723bxq"/></g>`,
		"fallback": "withicons:ungroup-duo",
	});
}

export default Component;
