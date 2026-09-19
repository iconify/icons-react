import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yodzen-to.css';
import '../../css/x/x9bub5b4h.css';
import '../../css/z/zbegq1b6y.css';
import '../../css/q/qzghk1bvp.css';
import '../../css/w/wdqzwdcxo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="yodzen-to"/><path class="x9bub5b4h"/><rect class="zbegq1b6y"/><rect class="qzghk1bvp"/><rect class="wdqzwdcxo"/></g>`,
		"fallback": "garden:user-list-fill-16",
	});
}

export default Component;
