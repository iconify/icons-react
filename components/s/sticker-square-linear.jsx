import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fhjg0plsn.css';
import '../../css/r/rak27ab8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fhjg0plsn"/><path class="rak27ab8n"/></g>`,
		"fallback": "solar:sticker-square-linear",
	});
}

export default Component;
