import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kqqv5kb9t.css';
import '../../css/r/rlr2al09o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kqqv5kb9t"/><path class="rlr2al09o"/></g>`,
		"fallback": "keyline-icons:paper-bag-sharp-two-tone",
	});
}

export default Component;
