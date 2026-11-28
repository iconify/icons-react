import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k_2h7p16c.css';
import '../../css/t/t07weybnr.css';
import '../../css/v/vzue2ebav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="k_2h7p16c"/><path class="t07weybnr"/><path class="vzue2ebav"/></g>`,
		"fallback": "iconaut:square-split-horizontal",
	});
}

export default Component;
