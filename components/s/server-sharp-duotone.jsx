import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y2dca3b4z.css';
import '../../css/b/b28tj_i5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y2dca3b4z"/><path class="b28tj_i5e"/></g>`,
		"fallback": "keyline-icons:server-sharp-duotone",
	});
}

export default Component;
