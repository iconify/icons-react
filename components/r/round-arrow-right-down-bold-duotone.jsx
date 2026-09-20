import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnflixb5n.css';
import '../../css/o/o1xjm_b6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vnflixb5n"/><path class="o1xjm_b6t"/></g>`,
		"fallback": "solar:round-arrow-right-down-bold-duotone",
	});
}

export default Component;
