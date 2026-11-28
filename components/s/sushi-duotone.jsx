import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gqmjrsuyy.css';
import '../../css/s/sys0hi0cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gqmjrsuyy secondary"/><path class="primary sys0hi0cb"/></g>`,
		"fallback": "iconaut:sushi-duotone",
	});
}

export default Component;
