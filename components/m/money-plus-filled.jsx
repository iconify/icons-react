import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v9ct95b1c.css';
import '../../css/g/ghqo70k7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="v9ct95b1c"/><path class="ghqo70k7l"/></g>`,
		"fallback": "reicon:money-plus-filled",
	});
}

export default Component;
