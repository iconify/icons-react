import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k9kdfmz8g.css';
import '../../css/v/vxjs5tbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="k9kdfmz8g"/><path class="vxjs5tbav"/></g>`,
		"fallback": "keyline-icons:message-dot-sharp-duotone",
	});
}

export default Component;
