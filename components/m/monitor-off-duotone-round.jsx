import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bf2gb8u_p.css';
import '../../css/e/exzgiybys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bf2gb8u_p"/><path class="exzgiybys"/></g>`,
		"fallback": "coolicons:monitor-off-duotone-round",
	});
}

export default Component;
