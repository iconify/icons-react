import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xu7ch_bha.css';
import '../../css/t/t0iodcceh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xu7ch_bha"/><path class="t0iodcceh"/></g>`,
		"fallback": "keyline-icons:video-two-tone",
	});
}

export default Component;
