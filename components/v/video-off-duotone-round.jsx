import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mp85_kbvo.css';
import '../../css/w/w394mfwrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mp85_kbvo"/><path class="w394mfwrb"/></g>`,
		"fallback": "coolicons:video-off-duotone-round",
	});
}

export default Component;
