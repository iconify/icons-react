import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x5c-v1bdu.css';
import '../../css/a/axxkxcb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x5c-v1bdu"/><path class="axxkxcb5j"/></g>`,
		"fallback": "reicon:timer-pause-filled",
	});
}

export default Component;
