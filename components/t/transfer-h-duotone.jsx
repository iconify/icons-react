import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lk9xs5a9y.css';
import '../../css/n/nglzxjb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lk9xs5a9y"/><path class="nglzxjb2m"/></g>`,
		"fallback": "reicon:transfer-h-duotone",
	});
}

export default Component;
