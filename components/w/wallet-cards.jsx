import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/ra9pnzbjo.css';
import '../../css/q/qbat23bxh.css';
import '../../css/s/srh_45b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ra9pnzbjo wm-k"/><path class="qbat23bxh wm-a"/><path class="srh_45b_n"/></g>`,
		"fallback": "withicons-bauhaus:wallet-cards",
	});
}

export default Component;
