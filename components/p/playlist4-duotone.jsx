import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lm0rblb-p.css';
import '../../css/x/x50f-ezsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lm0rblb-p"/><path class="x50f-ezsa"/></g>`,
		"fallback": "reicon:playlist4-duotone",
	});
}

export default Component;
