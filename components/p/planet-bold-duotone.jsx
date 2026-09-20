import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v17fuccch.css';
import '../../css/b/bur3kmbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v17fuccch"/><path class="bur3kmbhx"/></g>`,
		"fallback": "solar:planet-bold-duotone",
	});
}

export default Component;
