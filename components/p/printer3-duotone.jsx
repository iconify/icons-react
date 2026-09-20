import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tqv6axgqn.css';
import '../../css/p/pbrwfobef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tqv6axgqn"/><path class="pbrwfobef"/></g>`,
		"fallback": "reicon:printer3-duotone",
	});
}

export default Component;
