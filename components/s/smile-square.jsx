import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gbik_er2h.css';
import '../../css/f/frgs34bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gbik_er2h"/><path clip-rule="evenodd" class="frgs34bhv"/></g>`,
		"fallback": "reicon:smile-square",
	});
}

export default Component;
