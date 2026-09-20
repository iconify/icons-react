import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zp0xi24yn.css';
import '../../css/c/cuxalxbga.css';
import '../../css/n/nfnqu9b0f.css';
import '../../css/o/oqmi3sbuu.css';
import '../../css/f/fnbnvh3fo.css';
import '../../css/c/cqzu6_4dk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zp0xi24yn"/><path class="cuxalxbga"/><path class="nfnqu9b0f"/><path class="oqmi3sbuu"/><path class="fnbnvh3fo"/><path class="cqzu6_4dk"/></g>`,
		"fallback": "streamline-cyber-color:receipt-envelope",
	});
}

export default Component;
