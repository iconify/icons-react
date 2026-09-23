import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pqcov2b9q.css';
import '../../css/f/fu-0pb9bw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="pqcov2b9q"/><path class="fu-0pb9bw"/></g>`,
		"fallback": "keyline-icons:monitor-sparkles-sharp-fill",
	});
}

export default Component;
