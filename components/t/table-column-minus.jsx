import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kxorirb4b.css';
import '../../css/q/q92hctc1y.css';
import '../../css/m/mr89aqbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kxorirb4b"/><path class="q92hctc1y"/><rect transform="matrix(0 -1 -1 0 9.76 21.24)" class="mr89aqbbq"/></g>`,
		"fallback": "andrsrxn:table-column-minus",
	});
}

export default Component;
