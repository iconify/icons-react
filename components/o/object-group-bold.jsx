import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dur61vhbw.css';
import '../../css/j/j3uzzx8qh.css';
import '../../css/e/e8s28i-4d.css';
import '../../css/f/fj5coubit.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dur61vhbw"/><path class="j3uzzx8qh"/><path clip-rule="evenodd" class="e8s28i-4d"/><rect class="fj5coubit"/></g>`,
		"fallback": "glyphs:object-group-bold",
	});
}

export default Component;
