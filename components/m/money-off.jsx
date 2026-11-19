import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h392zojjn.css';
import '../../css/r/r1b-l9bzw.css';
import '../../css/j/j3to_qbax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h392zojjn"/><path class="r1b-l9bzw"/><path class="j3to_qbax"/></g>`,
		"fallback": "andrsrxn:money-off",
	});
}

export default Component;
