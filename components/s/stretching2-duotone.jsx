import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qa8tockca.css';
import '../../css/a/awtxz_9ry.css';
import '../../css/k/ku_rq2ysa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qa8tockca"/><path clip-rule="evenodd" class="awtxz_9ry"/><path class="ku_rq2ysa"/></g>`,
		"fallback": "reicon:stretching2-duotone",
	});
}

export default Component;
