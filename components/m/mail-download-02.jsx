import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/oljd_nblb.css';
import '../../css/d/df-j23bjo.css';
import '../../css/f/ff4ordp-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="oljd_nblb"/><path class="df-j23bjo"/><path class="ff4ordp-e"/></g>`,
		"fallback": "hugeicons:mail-download-02",
	});
}

export default Component;
