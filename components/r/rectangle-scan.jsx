import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ts1ovjoar.css';
import '../../css/x/xvu_v82pz.css';
import '../../css/x/xlstbab5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 18.06 16.2)" class="ts1ovjoar"/><path class="xvu_v82pz"/><rect transform="matrix(0 -1 -1 0 18.06 16.2)" class="xlstbab5p"/></g>`,
		"fallback": "andrsrxn:rectangle-scan",
	});
}

export default Component;
