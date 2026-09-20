import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y4rb44b0t.css';
import '../../css/i/i5w7s1btf.css';
import '../../css/w/wl2no6bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="y4rb44b0t"/><path class="i5w7s1btf"/><path class="wl2no6bnr"/></g>`,
		"fallback": "reicon:password3",
	});
}

export default Component;
