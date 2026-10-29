import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/ognfdrb1e.css';
import '../../css/d/d4-92dm9n.css';
import '../../css/u/uty5c9-8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ognfdrb1e wm-k"/><path class="d4-92dm9n"/><path class="uty5c9-8e wm-s"/></g>`,
		"fallback": "withicons-bauhaus:mail-x",
	});
}

export default Component;
