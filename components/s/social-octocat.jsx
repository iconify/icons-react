import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vd5gwrbhz.css';
import '../../css/l/l3iub1bhv.css';
import '../../css/o/o5esmw4te.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vd5gwrbhz"/><path class="l3iub1bhv"/><path class="o5esmw4te"/></g>`,
		"fallback": "ion:social-octocat",
	});
}

export default Component;
