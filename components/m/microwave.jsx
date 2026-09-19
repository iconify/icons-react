import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vgmcvfb2v.css';
import '../../css/x/xyr4x2b4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vgmcvfb2v"/><path class="xyr4x2b4k"/></g>`,
		"fallback": "griddy-icons:microwave",
	});
}

export default Component;
