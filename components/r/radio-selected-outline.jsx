import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/imnimkbei.css';
import '../../css/i/irkg-qf8o.css';
import '../../css/i/iziuvkmoy.css';
import '../../css/o/o3ma1_buu.css';
import '../../css/n/n6_wcbc0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="imnimkbei"/><path class="irkg-qf8o"/><path class="iziuvkmoy"/><path class="o3ma1_buu"/><path class="n6_wcbc0h"/></g>`,
		"fallback": "lsicon:radio-selected-outline",
	});
}

export default Component;
