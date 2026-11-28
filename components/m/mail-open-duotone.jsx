import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gik050q8n.css';
import '../../css/y/ybx9tcc4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gik050q8n secondary"/><path class="primary ybx9tcc4g"/></g>`,
		"fallback": "iconaut:mail-open-duotone",
	});
}

export default Component;
