import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ljl6vmb9x.css';
import '../../css/k/ki3shfdfu.css';
import '../../css/p/p1-w_lbvt.css';
import '../../css/x/xm56qfbnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ljl6vmb9x"/><path class="ki3shfdfu"/><path class="p1-w_lbvt"/><path class="xm56qfbnf"/></g>`,
		"fallback": "icon-park:send-email",
	});
}

export default Component;
