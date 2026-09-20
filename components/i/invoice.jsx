import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1fdl068e.css';
import '../../css/l/lntqxnbhs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1fdl068e"/><path clip-rule="evenodd" class="lntqxnbhs"/></g>`,
		"fallback": "reicon:invoice",
	});
}

export default Component;
