import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nxkqdkb5j.css';
import '../../css/e/epchynlxc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nxkqdkb5j"/><path class="epchynlxc"/></g>`,
		"fallback": "keyline-icons:monitor-sharp-duotone",
	});
}

export default Component;
