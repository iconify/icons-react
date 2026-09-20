import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qav6ujbmi.css';
import '../../css/r/r4e8uccvk.css';
import '../../css/v/vjyb-4bvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qav6ujbmi"/><path class="r4e8uccvk"/><path class="vjyb-4bvf"/></g>`,
		"fallback": "reicon:ufo2-duotone",
	});
}

export default Component;
