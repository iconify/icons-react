import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yg620pbav.css';
import '../../css/b/brhnrtb_n.css';
import '../../css/n/n06a_8beg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="yg620pbav"/><path class="brhnrtb_n"/><path clip-rule="evenodd" class="n06a_8beg"/></g>`,
		"fallback": "reicon:sliders",
	});
}

export default Component;
