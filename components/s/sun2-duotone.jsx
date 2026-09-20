import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kf0_gw6sp.css';
import '../../css/g/g23mak7rg.css';
import '../../css/j/jgbdxybfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kf0_gw6sp"/><path clip-rule="evenodd" class="g23mak7rg"/><path class="jgbdxybfl"/></g>`,
		"fallback": "reicon:sun2-duotone",
	});
}

export default Component;
