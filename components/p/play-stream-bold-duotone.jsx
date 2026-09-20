import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s4ypcvbho.css';
import '../../css/v/v_r-dov2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s4ypcvbho"/><path class="v_r-dov2n"/></g>`,
		"fallback": "solar:play-stream-bold-duotone",
	});
}

export default Component;
