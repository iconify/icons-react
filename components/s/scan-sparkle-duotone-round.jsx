import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykg0ngr9e.css';
import '../../css/y/ylyt3v7ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ykg0ngr9e"/><path class="ylyt3v7ol"/></g>`,
		"fallback": "coolicons:scan-sparkle-duotone-round",
	});
}

export default Component;
