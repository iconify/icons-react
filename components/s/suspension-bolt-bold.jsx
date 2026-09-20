import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/px-v8fp6s.css';
import '../../css/l/l_ox2fgog.css';
import '../../css/x/xs3lbmb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="px-v8fp6s"/><path class="l_ox2fgog"/><path class="xs3lbmb9r"/></g>`,
		"fallback": "solar:suspension-bolt-bold",
	});
}

export default Component;
