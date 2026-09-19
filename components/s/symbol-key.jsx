import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b211mtdde.css';
import '../../css/o/of28um4lw.css';
import '../../css/w/wfvim_bfw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b211mtdde"/><path class="of28um4lw"/><path clip-rule="evenodd" class="wfvim_bfw"/></g>`,
		"fallback": "codicon:symbol-key",
	});
}

export default Component;
