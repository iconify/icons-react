import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d45drvnxw.css';
import '../../css/z/zbgw8rbqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d45drvnxw"/><path class="zbgw8rbqx"/></g>`,
		"fallback": "coolicons:more-grid-duotone-round",
	});
}

export default Component;
