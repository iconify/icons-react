import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fj-xrub6u.css';
import '../../css/c/cybvnbcqt.css';
import '../../css/h/hu4sy94_g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fj-xrub6u"/><path clip-rule="evenodd" class="cybvnbcqt"/><path class="hu4sy94_g"/></g>`,
		"fallback": "reicon:stars3-filled",
	});
}

export default Component;
