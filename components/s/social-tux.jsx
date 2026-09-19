import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ki4vmlb-h.css';
import '../../css/f/fqwam5hgk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ki4vmlb-h"/><path class="fqwam5hgk"/></g>`,
		"fallback": "ion:social-tux",
	});
}

export default Component;
