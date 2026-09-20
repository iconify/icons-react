import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u99mbdh7p.css';
import '../../css/o/onbcy1mqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u99mbdh7p"/><path clip-rule="evenodd" class="onbcy1mqf"/></g>`,
		"fallback": "reicon:sack-dollar-filled",
	});
}

export default Component;
