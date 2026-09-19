import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r_aco9b_v.css';
import '../../css/v/v57r1kbjg.css';
import '../../css/k/kpw1mub_b.css';
import '../../css/g/gujnp2wzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="r_aco9b_v"/><path class="v57r1kbjg"/><path clip-rule="evenodd" class="kpw1mub_b"/><path class="gujnp2wzw"/></g>`,
		"fallback": "icon-park-outline:monitor-camera",
	});
}

export default Component;
