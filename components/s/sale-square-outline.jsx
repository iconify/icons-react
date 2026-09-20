import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bf-cksb2n.css';
import '../../css/g/geacapbia.css';
import '../../css/k/krmw3db2e.css';
import '../../css/s/sddor0m5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bf-cksb2n"/><path class="geacapbia"/><path clip-rule="evenodd" class="krmw3db2e"/><path clip-rule="evenodd" class="sddor0m5s"/></g>`,
		"fallback": "solar:sale-square-outline",
	});
}

export default Component;
