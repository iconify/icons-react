import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f5x0ljbdh.css';
import '../../css/s/s1n1ajbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f5x0ljbdh"/><path clip-rule="evenodd" class="s1n1ajbjp"/></g>`,
		"fallback": "solar:rounded-magnifier-bold-duotone",
	});
}

export default Component;
