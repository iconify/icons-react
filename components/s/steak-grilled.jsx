import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i78m8966e.css';
import '../../css/e/ecyb1vbpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i78m8966e"/><path class="ecyb1vbpd"/></g>`,
		"fallback": "griddy-icons:steak-grilled",
	});
}

export default Component;
