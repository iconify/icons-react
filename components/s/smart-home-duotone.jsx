import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lbpixvbyy.css';
import '../../css/v/v60by2b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lbpixvbyy"/><path clip-rule="evenodd" class="v60by2b7w"/></g>`,
		"fallback": "reicon:smart-home-duotone",
	});
}

export default Component;
