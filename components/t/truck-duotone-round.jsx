import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sj9nxq1im.css';
import '../../css/w/wtlow3-wy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sj9nxq1im"/><path class="wtlow3-wy"/></g>`,
		"fallback": "coolicons:truck-duotone-round",
	});
}

export default Component;
