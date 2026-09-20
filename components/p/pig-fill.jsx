import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wqtsf5bkk.css';
import '../../css/n/nvtcicbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wqtsf5bkk"/><path class="nvtcicbvr"/></g>`,
		"fallback": "keyline-icons:pig-fill",
	});
}

export default Component;
