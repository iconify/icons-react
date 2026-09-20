import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/p/pxe2_ubmz.css';
import '../../css/e/e5xtnl27s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="pxe2_ubmz"/><path class="e5xtnl27s"/></g>`,
		"fallback": "keyline-icons:siren-sharp-fill",
	});
}

export default Component;
