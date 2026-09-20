import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oqnfq5bnn.css';
import '../../css/f/fnxnvgb3d.css';
import '../../css/w/wvdg6gbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oqnfq5bnn"/><path class="fnxnvgb3d"/><path class="wvdg6gbks"/></g>`,
		"fallback": "streamline-freehand-color:security-network-chain",
	});
}

export default Component;
