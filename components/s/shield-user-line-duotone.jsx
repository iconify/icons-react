import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/npxa2k15o.css';
import '../../css/r/rs-d_y_0o.css';
import '../../css/j/jo4fgsbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="npxa2k15o"/><circle class="rs-d_y_0o"/><path class="jo4fgsbkh"/></g>`,
		"fallback": "solar:shield-user-line-duotone",
	});
}

export default Component;
