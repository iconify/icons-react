import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0ecc5dsq.css';
import '../../css/a/aw5n4pain.css';
import '../../css/f/fuha1vbse.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p0ecc5dsq"/><path class="aw5n4pain"/><path class="fuha1vbse"/></g>`,
		"fallback": "heroicons:square-3-stack-3d-20-solid",
	});
}

export default Component;
