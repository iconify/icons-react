import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z2mugkbcy.css';
import '../../css/k/kk7pygdty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z2mugkbcy"/><path clip-rule="evenodd" class="kk7pygdty"/></g>`,
		"fallback": "reicon:lock-password",
	});
}

export default Component;
