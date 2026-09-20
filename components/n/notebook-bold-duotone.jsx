import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pte4imbmq.css';
import '../../css/c/c0fao-bwt.css';
import '../../css/m/mob5m333w.css';
import '../../css/f/f4490rb0n.css';
import '../../css/b/bokxqfwcd.css';
import '../../css/d/dzbml3t8n.css';
import '../../css/w/w2dwhybkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pte4imbmq"/><path class="c0fao-bwt"/><path class="mob5m333w"/><path class="f4490rb0n"/><path class="bokxqfwcd"/><path class="dzbml3t8n"/><path class="w2dwhybkn"/></g>`,
		"fallback": "solar:notebook-bold-duotone",
	});
}

export default Component;
