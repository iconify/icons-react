import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jqs4cdc7m.css';
import '../../css/s/sq7tt6u1i.css';
import '../../css/o/ozlgx6bya.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jqs4cdc7m"/><path class="sq7tt6u1i"/><path class="ozlgx6bya"/></g>`,
		"fallback": "foundation:social-behance",
	});
}

export default Component;
