import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/ve--dvbvr.css';
import '../../css/s/sbweck1kl.css';
import '../../css/s/skqfcdqhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ve--dvbvr"/><path class="sbweck1kl"/><path class="skqfcdqhg"/></g>`,
		"fallback": "keyline-icons:menu-sparkles-sharp-two-tone",
	});
}

export default Component;
