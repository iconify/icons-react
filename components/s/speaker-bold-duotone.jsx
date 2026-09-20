import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sng0m5e4g.css';
import '../../css/j/j-dfg_nom.css';
import '../../css/o/o_46v9b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sng0m5e4g"/><path clip-rule="evenodd" class="j-dfg_nom"/><path clip-rule="evenodd" class="o_46v9b5n"/></g>`,
		"fallback": "solar:speaker-bold-duotone",
	});
}

export default Component;
