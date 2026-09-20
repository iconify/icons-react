import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_i2oznin.css';
import '../../css/x/xnhh7ibfg.css';
import '../../css/g/gkjx88u_w.css';
import '../../css/n/nlziwltef.css';
import '../../css/y/yytr64b3t.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/i/ikzj99boc.css';
import '../../css/a/assyhbxpq.css';
import '../../css/v/vi_ebkb7x.css';
import '../../css/c/cypd3mm5x.css';
import '../../css/i/i1ye8bcxp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_i2oznin"/><path class="xnhh7ibfg"/><path class="gkjx88u_w"/><circle class="nlziwltef"/><rect class="yytr64b3t"/><g class="brzn_0bpr"><path class="ikzj99boc"/><rect class="assyhbxpq"/><path class="vi_ebkb7x"/><circle class="cypd3mm5x"/><path class="i1ye8bcxp"/></g>`,
		"fallback": "openmoji:schwabisch-gmund-ratshaus",
	});
}

export default Component;
