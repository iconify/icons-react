import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/iox6mb34c.css';
import '../../css/u/u_1s2e7go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="iox6mb34c"/><path class="u_1s2e7go"/></g>`,
		"fallback": "hugeicons:sun-cloud-angled-rain-zap-01",
	});
}

export default Component;
