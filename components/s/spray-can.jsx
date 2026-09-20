import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2_xg2fqd.css';
import '../../css/z/z9rfyqosp.css';
import '../../css/b/b4p71pbzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n2_xg2fqd"/><path class="z9rfyqosp"/><path class="b4p71pbzj"/></g>`,
		"fallback": "pixelarticons:spray-can",
	});
}

export default Component;
