import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttsz34rcj.css';
import '../../css/i/i_imu1b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ttsz34rcj"/><path clip-rule="evenodd" class="i_imu1b0r"/></g>`,
		"fallback": "nrk:tablet-expressive",
	});
}

export default Component;
