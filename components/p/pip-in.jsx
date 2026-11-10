import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mc6tqrl-h.css';
import '../../css/p/pdsx7eb7o.css';
import '../../css/g/g3wkg17kd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mc6tqrl-h"/><path class="pdsx7eb7o"/><path class="g3wkg17kd"/></g>`,
		"fallback": "andrsrxn:pip-in",
	});
}

export default Component;
