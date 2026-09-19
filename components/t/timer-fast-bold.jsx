import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a23d2obbm.css';
import '../../css/g/gj72yxbju.css';
import '../../css/x/xpke-abpq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a23d2obbm"/><path clip-rule="evenodd" class="gj72yxbju"/><path class="xpke-abpq"/></g>`,
		"fallback": "glyphs:timer-fast-bold",
	});
}

export default Component;
