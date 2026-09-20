import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vywy_ym9n.css';
import '../../css/i/idabbji3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vywy_ym9n"/><path class="idabbji3k"/></g>`,
		"fallback": "reicon:mask2-filled",
	});
}

export default Component;
