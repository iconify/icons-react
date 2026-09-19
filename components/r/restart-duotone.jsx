import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/llper-sbd.css';
import '../../css/i/idq3xvbyd.css';
import '../../css/m/meq82tc7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="llper-sbd"/><path class="idq3xvbyd"/><path class="meq82tc7c"/></g>`,
		"fallback": "iconamoon:restart-duotone",
	});
}

export default Component;
