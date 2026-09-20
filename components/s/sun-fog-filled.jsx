import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxgwz42_y.css';
import '../../css/m/mbc4x5bey.css';
import '../../css/l/l2daw171n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rxgwz42_y"/><path class="mbc4x5bey"/><path clip-rule="evenodd" class="l2daw171n"/></g>`,
		"fallback": "reicon:sun-fog-filled",
	});
}

export default Component;
