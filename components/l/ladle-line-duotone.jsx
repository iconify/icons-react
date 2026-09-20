import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hhmdn1v5b.css';
import '../../css/n/n_3uogb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hhmdn1v5b"/><path class="n_3uogb7m"/></g>`,
		"fallback": "solar:ladle-line-duotone",
	});
}

export default Component;
