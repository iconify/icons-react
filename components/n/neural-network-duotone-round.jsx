import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfbw-tbux.css';
import '../../css/y/y6yqvjb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bfbw-tbux"/><path class="y6yqvjb5m"/></g>`,
		"fallback": "coolicons:neural-network-duotone-round",
	});
}

export default Component;
