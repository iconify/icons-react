import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qry4-ubuv.css';
import '../../css/r/rjcylly-u.css';
import '../../css/w/wwo-mibap.css';
import '../../css/a/ahklu1bar.css';
import '../../css/e/eozawache.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qry4-ubuv"/><path class="rjcylly-u"/><path class="wwo-mibap"/><path class="ahklu1bar"/><path class="eozawache"/></g>`,
		"fallback": "andrsrxn:printer-x",
	});
}

export default Component;
