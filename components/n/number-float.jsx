import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jexse1bhw.css';
import '../../css/w/w7zkk5bhq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jexse1bhw"/><path clip-rule="evenodd" class="w7zkk5bhq"/></g>`,
		"fallback": "at-icons:number-float",
	});
}

export default Component;
