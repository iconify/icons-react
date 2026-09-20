import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ekqoz8b6p.css';
import '../../css/b/bdbg6n-qf.css';
import '../../css/j/jtlervpkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ekqoz8b6p"/><path class="bdbg6n-qf"/><path clip-rule="evenodd" class="jtlervpkk"/></g>`,
		"fallback": "reicon:safe-square-duotone",
	});
}

export default Component;
