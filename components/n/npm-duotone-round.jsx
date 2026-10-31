import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p45asib6d.css';
import '../../css/q/q1h_58psq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p45asib6d"/><path class="q1h_58psq"/></g>`,
		"fallback": "coolicons:npm-duotone-round",
	});
}

export default Component;
