import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sxa5ibc9t.css';
import '../../css/j/j_41ouhvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sxa5ibc9t"/><path class="j_41ouhvu"/></g>`,
		"fallback": "reicon:profile-circle-filled",
	});
}

export default Component;
