import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/swsab_86e.css';
import '../../css/f/fw5rt46mg.css';
import '../../css/c/clsyeylvw.css';
import '../../css/j/jqt39-bbm.css';
import '../../css/q/q6cbe7bnx.css';
import '../../css/k/kwa31tbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="swsab_86e"/><circle class="fw5rt46mg"/><path class="clsyeylvw"/><path class="jqt39-bbm"/><path class="q6cbe7bnx"/><path class="kwa31tbhm"/></g>`,
		"fallback": "solar:usb-linear",
	});
}

export default Component;
