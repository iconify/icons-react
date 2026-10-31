import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vc_s7sh1o.css';
import '../../css/z/z9zgpdbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vc_s7sh1o"/><path class="z9zgpdbwu"/></g>`,
		"fallback": "coolicons:mobile-button-duocolor-round",
	});
}

export default Component;
