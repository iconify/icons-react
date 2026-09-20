import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0ppu1btw.css';
import '../../css/p/pqe-l4qnj.css';
import '../../css/i/iaaj4xbkh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h0ppu1btw"/><path class="pqe-l4qnj"/><path class="iaaj4xbkh"/></g>`,
		"fallback": "streamline-plump-color:padlock-square-2-flat",
	});
}

export default Component;
