import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ya3u2jbaq.css';
import '../../css/n/n_36tibay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ya3u2jbaq"/><path class="n_36tibay"/></g>`,
		"fallback": "coolicons:rotate-right-duotone-round",
	});
}

export default Component;
