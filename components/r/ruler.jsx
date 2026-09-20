import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/dexa1wbbu.css';
import '../../css/w/w6qamsnvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="dexa1wbbu"/><path class="w6qamsnvt"/></g>`,
		"fallback": "streamline-sharp-color:ruler",
	});
}

export default Component;
