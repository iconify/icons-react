import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-0hx-lvs.css';
import '../../css/y/y90hevbjd.css';
import '../../css/j/j_41ouhvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j-0hx-lvs"/><path class="y90hevbjd"/><path class="j_41ouhvu"/></g>`,
		"fallback": "reicon:user-cirlce-add-filled",
	});
}

export default Component;
