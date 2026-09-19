import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sprkccr_w.css';
import '../../css/o/o5k3y_btt.css';
import '../../css/p/pms32xb-c.css';
import '../../css/g/gywsm-bsw.css';
import '../../css/f/fzpit_b_s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sprkccr_w"/><path class="o5k3y_btt"/><path class="pms32xb-c"/><path class="gywsm-bsw"/><path class="fzpit_b_s"/></g>`,
		"fallback": "pepicons:knive-fork",
	});
}

export default Component;
