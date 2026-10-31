import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbjrp86wk.css';
import '../../css/y/yfaz6x2yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nbjrp86wk"/><path class="yfaz6x2yi"/></g>`,
		"fallback": "coolicons:reload-duotone-round",
	});
}

export default Component;
