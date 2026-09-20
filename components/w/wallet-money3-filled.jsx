import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lc0r9hlll.css';
import '../../css/k/kjis_zi_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lc0r9hlll"/><path class="kjis_zi_c"/></g>`,
		"fallback": "reicon:wallet-money3-filled",
	});
}

export default Component;
