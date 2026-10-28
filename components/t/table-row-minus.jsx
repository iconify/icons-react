import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1m18_b_y.css';
import '../../css/y/y9ekkwrbu.css';
import '../../css/m/mr89aqbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t1m18_b_y"/><path class="y9ekkwrbu"/><rect transform="matrix(1 0 0 -1 2.76 9.76)" class="mr89aqbbq"/></g>`,
		"fallback": "andrsrxn:table-row-minus",
	});
}

export default Component;
