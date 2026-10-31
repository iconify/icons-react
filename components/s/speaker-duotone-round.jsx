import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_0tfzh2q.css';
import '../../css/y/y0q3r5ioh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_0tfzh2q"/><path class="y0q3r5ioh"/></g>`,
		"fallback": "coolicons:speaker-duotone-round",
	});
}

export default Component;
