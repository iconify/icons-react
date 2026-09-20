import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xg1lcnbpv.css';
import '../../css/e/en376_own.css';
import '../../css/d/dk_5p9bho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xg1lcnbpv"/><path clip-rule="evenodd" class="en376_own"/><path class="dk_5p9bho"/></g>`,
		"fallback": "reicon:translate2-filled",
	});
}

export default Component;
