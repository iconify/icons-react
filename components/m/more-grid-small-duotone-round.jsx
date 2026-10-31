import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bgqjtbbtc.css';
import '../../css/o/o3dm7ibqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bgqjtbbtc"/><path class="o3dm7ibqc"/></g>`,
		"fallback": "coolicons:more-grid-small-duotone-round",
	});
}

export default Component;
