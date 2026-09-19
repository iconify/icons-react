import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mhok5-d7y.css';
import '../../css/x/x4vzpib2m.css';
import '../../css/b/bb9hymbdr.css';
import '../../css/g/gdl4st_bw.css';
import '../../css/w/w9ex1pb6f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mhok5-d7y"/><rect transform="rotate(-30 4.241 15.778)" class="x4vzpib2m"/><path class="bb9hymbdr"/><rect transform="rotate(-30 26.401 34.16)" class="gdl4st_bw"/><path class="w9ex1pb6f"/></g>`,
		"fallback": "icon-park-outline:selfie",
	});
}

export default Component;
