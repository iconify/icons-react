import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0nds4_gn.css';
import '../../css/y/yovjmyyvz.css';
import '../../css/u/u8qw3jobp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a0nds4_gn"/><path clip-rule="evenodd" class="yovjmyyvz"/><path class="u8qw3jobp"/></g>`,
		"fallback": "pepicons:loop-minus-print",
	});
}

export default Component;
