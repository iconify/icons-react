import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eoh_85qom.css';
import '../../css/s/suh2uzb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eoh_85qom"/><path class="suh2uzb5r"/></g>`,
		"fallback": "reicon:playlist5-duotone",
	});
}

export default Component;
