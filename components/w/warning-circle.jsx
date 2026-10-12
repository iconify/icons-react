import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u7e7mwbuu.css';
import '../../css/r/ru6ak1lfz.css';
import '../../css/b/bfram0b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u7e7mwbuu"/><path class="ru6ak1lfz"/><path class="bfram0b5j"/></g>`,
		"fallback": "andrsrxn:warning-circle",
	});
}

export default Component;
