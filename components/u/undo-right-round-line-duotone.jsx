import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kd5y-abln.css';
import '../../css/x/x89fjbf_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kd5y-abln"/><path class="x89fjbf_t"/></g>`,
		"fallback": "solar:undo-right-round-line-duotone",
	});
}

export default Component;
