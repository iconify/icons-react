import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w8hdxmbxx.css';
import '../../css/l/l7y_1tozn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w8hdxmbxx"/><path clip-rule="evenodd" class="l7y_1tozn"/></g>`,
		"fallback": "reicon:notebook2",
	});
}

export default Component;
