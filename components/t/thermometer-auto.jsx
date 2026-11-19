import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/scc5vftpi.css';
import '../../css/k/k8_dgshaq.css';
import '../../css/o/owbap849d.css';
import '../../css/t/tt-x2kdvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="scc5vftpi"/><path class="k8_dgshaq"/><path class="owbap849d"/><path class="tt-x2kdvz"/></g>`,
		"fallback": "andrsrxn:thermometer-auto",
	});
}

export default Component;
