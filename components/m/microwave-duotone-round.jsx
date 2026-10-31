import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8nl6lbrc.css';
import '../../css/c/c6o31lvgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w8nl6lbrc"/><path class="c6o31lvgq"/></g>`,
		"fallback": "coolicons:microwave-duotone-round",
	});
}

export default Component;
