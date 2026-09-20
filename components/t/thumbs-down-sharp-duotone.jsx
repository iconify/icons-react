import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y738jwn9u.css';
import '../../css/s/s0r4vz39r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y738jwn9u"/><path class="s0r4vz39r"/></g>`,
		"fallback": "keyline-icons:thumbs-down-sharp-duotone",
	});
}

export default Component;
