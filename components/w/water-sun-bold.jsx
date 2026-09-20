import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1x-rc8yj.css';
import '../../css/t/tsvf0gb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="x1x-rc8yj"/><path class="tsvf0gb_d"/></g>`,
		"fallback": "solar:water-sun-bold",
	});
}

export default Component;
