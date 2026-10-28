import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aun3_q3hq.css';
import '../../css/t/tt7zy3ymd.css';
import '../../css/m/mr89aqbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aun3_q3hq"/><path class="tt7zy3ymd"/><rect transform="matrix(1 0 0 -1 2.46 10.06)" class="mr89aqbbq"/></g>`,
		"fallback": "andrsrxn:table-row-x",
	});
}

export default Component;
