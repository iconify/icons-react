import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cdwgx1rwf.css';
import '../../css/x/xjx317bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cdwgx1rwf secondary"/><path class="primary xjx317bsq"/></g>`,
		"fallback": "iconaut:sunrise-duotone",
	});
}

export default Component;
