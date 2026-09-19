import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y1qak0s9k.css';
import '../../css/n/nyvu_qmab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y1qak0s9k"/><path class="nyvu_qmab"/></g>`,
		"fallback": "hugeicons:mcp-server",
	});
}

export default Component;
