import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pm7k4jjka.css';
import '../../css/x/xah_e3b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pm7k4jjka"/><path class="xah_e3b0p"/></g>`,
		"fallback": "coolicons:ratio-16-9-duotone-round",
	});
}

export default Component;
