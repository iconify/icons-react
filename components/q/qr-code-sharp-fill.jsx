import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e846sjymu.css';
import '../../css/n/ndwh9bcsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e846sjymu"/><path class="ndwh9bcsg"/></g>`,
		"fallback": "keyline-icons:qr-code-sharp-fill",
	});
}

export default Component;
