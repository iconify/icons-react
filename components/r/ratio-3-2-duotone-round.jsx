import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdsqh0b8n.css';
import '../../css/x/xkuaxzl0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wdsqh0b8n"/><path class="xkuaxzl0s"/></g>`,
		"fallback": "coolicons:ratio-3-2-duotone-round",
	});
}

export default Component;
