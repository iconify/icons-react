import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rbec9xb-r.css';
import '../../css/x/x4_13hbth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rbec9xb-r"/><path clip-rule="evenodd" class="x4_13hbth"/></g>`,
		"fallback": "reicon:trash6-filled",
	});
}

export default Component;
