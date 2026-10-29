import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wocduhf9u.css';
import '../../css/q/qh_txoe1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wocduhf9u"/><path class="qh_txoe1h"/></g>`,
		"fallback": "withicons:more-horizontal-engrave",
	});
}

export default Component;
