import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p8z45_bcw.css';
import '../../css/g/gr9z00b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p8z45_bcw"/><path class="gr9z00b3e"/></g>`,
		"fallback": "reicon:list-heart2-filled",
	});
}

export default Component;
