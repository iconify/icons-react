import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o8xjs2b1d.css';
import '../../css/m/mpxzqi55u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o8xjs2b1d"/><path class="mpxzqi55u"/></g>`,
		"fallback": "coolicons:tiktok-duotone-round",
	});
}

export default Component;
