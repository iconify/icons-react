import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4d0znhae.css';
import '../../css/w/wn1hx63gd.css';
import '../../css/u/unr0kubyr.css';
import '../../css/s/s-lzncbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m4d0znhae"/><path class="wn1hx63gd"/><path class="unr0kubyr"/><circle class="s-lzncbdb"/></g>`,
		"fallback": "andrsrxn:mail-notification",
	});
}

export default Component;
