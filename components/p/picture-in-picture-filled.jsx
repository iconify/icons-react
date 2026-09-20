import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dh62wob5o.css';
import '../../css/i/iz60unblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dh62wob5o"/><path class="iz60unblf"/></g>`,
		"fallback": "tabler:picture-in-picture-filled",
	});
}

export default Component;
