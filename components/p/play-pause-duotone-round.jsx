import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yr653hbhv.css';
import '../../css/y/yt0n2nbcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yr653hbhv"/><path class="yt0n2nbcs"/></g>`,
		"fallback": "coolicons:play-pause-duotone-round",
	});
}

export default Component;
