import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l4k2nwwaz.css';
import '../../css/o/ouzepdbve.css';
import '../../css/h/hbxrwe5kr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="l4k2nwwaz"/><ellipse class="ouzepdbve"/><path class="hbxrwe5kr"/></g>`,
		"fallback": "reicon:users-filled",
	});
}

export default Component;
