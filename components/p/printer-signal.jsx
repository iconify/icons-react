import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igsnfnxrq.css';
import '../../css/n/ne0a_2zjh.css';
import '../../css/k/kpojoje_h.css';
import '../../css/b/b9dkl4b5r.css';
import '../../css/w/wl36d7fyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="igsnfnxrq"/><path class="ne0a_2zjh"/><path class="kpojoje_h"/><path class="b9dkl4b5r"/><path class="wl36d7fyi"/></g>`,
		"fallback": "andrsrxn:printer-signal",
	});
}

export default Component;
