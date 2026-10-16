import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8ty_obto.css';
import '../../css/k/k5iv_0bgd.css';
import '../../css/q/q2a6e-bhn.css';
import '../../css/v/vw-knh15p.css';
import '../../css/e/e1y966bxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8ty_obto"/><path class="k5iv_0bgd"/><path class="q2a6e-bhn"/><path class="vw-knh15p"/><path class="e1y966bxd"/>`,
		"fallback": "energy-icons:pv-string-20-bold",
	});
}

export default Component;
