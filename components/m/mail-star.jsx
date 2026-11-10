import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r3pdth4lq.css';
import '../../css/w/wdw2xxi4u.css';
import '../../css/t/twwrszpor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r3pdth4lq"/><path class="wdw2xxi4u"/><path class="twwrszpor"/></g>`,
		"fallback": "andrsrxn:mail-star",
	});
}

export default Component;
