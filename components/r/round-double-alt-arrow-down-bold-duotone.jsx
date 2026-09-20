import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnflixb5n.css';
import '../../css/y/ya_0htb4d.css';
import '../../css/a/a1vkogs_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vnflixb5n"/><path class="ya_0htb4d"/><path class="a1vkogs_b"/></g>`,
		"fallback": "solar:round-double-alt-arrow-down-bold-duotone",
	});
}

export default Component;
