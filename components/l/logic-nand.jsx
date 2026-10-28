import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bla-5pbit.css';
import '../../css/o/okkq0lbwo.css';
import '../../css/j/jpordbbij.css';
import '../../css/w/w9su38bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bla-5pbit"/><path class="okkq0lbwo"/><circle class="jpordbbij"/><circle class="w9su38bli"/></g>`,
		"fallback": "andrsrxn:logic-nand",
	});
}

export default Component;
