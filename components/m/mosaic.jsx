import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qjsjbv3zt.css';
import '../../css/v/vtdiuyl3i.css';
import '../../css/d/dyr4g0gac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qjsjbv3zt"/><rect transform="rotate(90 0 21.26)scale(-1 1)" class="vtdiuyl3i"/><path class="dyr4g0gac"/></g>`,
		"fallback": "andrsrxn:mosaic",
	});
}

export default Component;
