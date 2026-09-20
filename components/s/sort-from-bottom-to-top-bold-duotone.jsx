import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ralvgguwp.css';
import '../../css/r/rzbequbko.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/i/ik91aybia.css';
import '../../css/n/ntcy9jf7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ralvgguwp"/><path class="rzbequbko"/><g class="mc2zb0bvp"><path class="ik91aybia"/><path class="ntcy9jf7q"/></g></g>`,
		"fallback": "solar:sort-from-bottom-to-top-bold-duotone",
	});
}

export default Component;
