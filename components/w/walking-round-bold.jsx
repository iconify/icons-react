import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mvhbktbat.css';
import '../../css/m/mc-g36p7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mvhbktbat"/><path clip-rule="evenodd" class="mc-g36p7n"/></g>`,
		"fallback": "solar:walking-round-bold",
	});
}

export default Component;
