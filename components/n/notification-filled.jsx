import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yjng5qb7o.css';
import '../../css/d/dsam-t6xg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yjng5qb7o"/><path clip-rule="evenodd" class="dsam-t6xg"/></g>`,
		"fallback": "reicon:notification-filled",
	});
}

export default Component;
