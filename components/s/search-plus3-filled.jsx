import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0f3z_bzo.css';
import '../../css/i/if0a5rbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0f3z_bzo"/><path clip-rule="evenodd" class="if0a5rbod"/></g>`,
		"fallback": "reicon:search-plus3-filled",
	});
}

export default Component;
