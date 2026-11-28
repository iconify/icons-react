import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a9ue71b2d.css';
import '../../css/i/ixskd9b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a9ue71b2d secondary"/><path class="ixskd9b9e primary"/></g>`,
		"fallback": "iconaut:rainbow-duotone",
	});
}

export default Component;
