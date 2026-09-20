import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/q/q-m41w_kv.css';
import '../../css/l/l7io8sbbr.css';
import '../../css/m/meiqav1nl.css';
import '../../css/t/taj4ylugj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="q-m41w_kv"/><path class="l7io8sbbr"/><path class="meiqav1nl"/><path class="taj4ylugj"/></g>`,
		"fallback": "lets-icons:view-horizont",
	});
}

export default Component;
