import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nj5ja_b0k.css';
import '../../css/m/mrxacov_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nj5ja_b0k"/><path clip-rule="evenodd" class="mrxacov_b"/></g>`,
		"fallback": "reicon:turntable-filled",
	});
}

export default Component;
