import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrhmbsbaa.css';
import '../../css/j/jg2jbrtcl.css';
import '../../css/e/e682d5bqr.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/l/lw196ubyp.css';
import '../../css/x/xwc-txbnc.css';
import '../../css/q/qc1aerb-i.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrhmbsbaa"/><path class="jg2jbrtcl"/><path class="e682d5bqr"/><g class="brzn_0bpr"><path class="lw196ubyp"/><path class="xwc-txbnc"/><path class="qc1aerb-i"/></g>`,
		"fallback": "openmoji:teacup-without-handle",
	});
}

export default Component;
