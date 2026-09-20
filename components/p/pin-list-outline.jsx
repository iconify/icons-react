import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w222tbclf.css';
import '../../css/b/bg2z60l4k.css';
import '../../css/f/fcsgee45r.css';
import '../../css/d/drb7xldnm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w222tbclf"/><path class="bg2z60l4k"/><path class="fcsgee45r"/><path class="drb7xldnm"/></g>`,
		"fallback": "solar:pin-list-outline",
	});
}

export default Component;
