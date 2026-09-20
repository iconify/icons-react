import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/ch1ctkp8j.css';
import '../../css/l/lb3khzbez.css';
import '../../css/i/i9o8s-0wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ch1ctkp8j"/><path class="lb3khzbez"/><path class="i9o8s-0wl"/></g>`,
		"fallback": "reicon:users-nearby-filled",
	});
}

export default Component;
