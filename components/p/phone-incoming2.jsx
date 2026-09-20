import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fl2qagqpn.css';
import '../../css/b/bshjspnfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fl2qagqpn"/><path class="bshjspnfb"/></g>`,
		"fallback": "reicon:phone-incoming2",
	});
}

export default Component;
