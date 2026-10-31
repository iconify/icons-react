import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kh-prx2jc.css';
import '../../css/q/quf2x8v8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kh-prx2jc"/><path class="quf2x8v8o"/></g>`,
		"fallback": "coolicons:tiktok-duocolor-round",
	});
}

export default Component;
