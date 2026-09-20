import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dyrcd-bsw.css';
import '../../css/i/i-s5vhb2l.css';
import '../../css/h/hqszsznzc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dyrcd-bsw"/><path class="i-s5vhb2l"/><path class="hqszsznzc"/></g>`,
		"fallback": "pepicons-pencil:speaker-high",
	});
}

export default Component;
