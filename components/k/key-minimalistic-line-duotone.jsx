import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fvm71nh3d.css';
import '../../css/t/tmpf65c9n.css';
import '../../css/c/ckcnl295s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fvm71nh3d"/><path class="tmpf65c9n"/><path class="ckcnl295s"/></g>`,
		"fallback": "solar:key-minimalistic-line-duotone",
	});
}

export default Component;
