import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mzuq4x0dn.css';
import '../../css/k/ktz4j74-r.css';
import '../../css/w/w29ath28m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mzuq4x0dn"/><path class="ktz4j74-r"/><path class="w29ath28m"/></g>`,
		"fallback": "solar:temperature-linear",
	});
}

export default Component;
