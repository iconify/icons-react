import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pggazub3e.css';
import '../../css/t/t5fwyab3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pggazub3e"/><path class="t5fwyab3g"/></g>`,
		"fallback": "solar:music-notes-bold-duotone",
	});
}

export default Component;
