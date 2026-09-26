import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gck084bsd.css';
import '../../css/l/ly96r7zqe.css';
import '../../css/c/cfa4tobzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gck084bsd"/><path class="ly96r7zqe"/><path class="cfa4tobzd"/></g>`,
		"fallback": "solar:separator-vertical-outline",
	});
}

export default Component;
