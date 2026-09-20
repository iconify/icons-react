import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wb4sbpb5g.css';
import '../../css/y/ysa1ox65n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wb4sbpb5g"/><path clip-rule="evenodd" class="ysa1ox65n"/></g>`,
		"fallback": "keyline-icons:paper-bag-duotone",
	});
}

export default Component;
