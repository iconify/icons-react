import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/e/e2f5rw45c.css';
import '../../css/q/q5njcybvt.css';
import '../../css/x/xrpkjpy8m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="e2f5rw45c"/><path class="q5njcybvt"/><circle class="xrpkjpy8m"/></g>`,
		"fallback": "icon-park:u-turn-right",
	});
}

export default Component;
