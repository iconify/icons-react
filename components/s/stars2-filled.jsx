import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r65c_-bzz.css';
import '../../css/i/ip2zo2bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r65c_-bzz"/><path class="ip2zo2bax"/></g>`,
		"fallback": "reicon:stars2-filled",
	});
}

export default Component;
