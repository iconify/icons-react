import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-3ylwbpn.css';
import '../../css/o/oqrcs70en.css';
import '../../css/d/d9crdbc4j.css';
import '../../css/g/gvseppb4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-15 16.07 4.07)" class="o-3ylwbpn"/><path class="oqrcs70en"/><path class="d9crdbc4j"/><rect transform="rotate(-15 3.87 8.75)" class="gvseppb4f"/></g>`,
		"fallback": "andrsrxn:telescope",
	});
}

export default Component;
