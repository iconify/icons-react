import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xkd818b9i.css';
import '../../css/w/wy4f2f08l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xkd818b9i"/><path class="wy4f2f08l"/></g>`,
		"fallback": "coolicons:square-dashed-square-top-right-duotone-round",
	});
}

export default Component;
