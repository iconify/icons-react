import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/ma3nmebwr.css';
import '../../css/r/rhhm9vz3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ma3nmebwr"/><path class="rhhm9vz3o"/></g>`,
		"fallback": "coolicons:screwdriver-duotone-round",
	});
}

export default Component;
