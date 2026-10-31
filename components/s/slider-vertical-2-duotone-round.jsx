import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfcj9obxq.css';
import '../../css/e/e3k1fabxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zfcj9obxq"/><path class="e3k1fabxe"/></g>`,
		"fallback": "coolicons:slider-vertical-2-duotone-round",
	});
}

export default Component;
