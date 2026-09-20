import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fzof01bza.css';
import '../../css/t/tkgsoy7il.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fzof01bza"/><path clip-rule="evenodd" class="tkgsoy7il"/></g>`,
		"fallback": "streamline-color:landscape-2-flat",
	});
}

export default Component;
