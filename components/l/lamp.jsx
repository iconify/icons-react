import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/z/zj4jkob1y.css';
import '../../css/o/ohdrrobob.css';
import '../../css/w/wrsw32bnx.css';
import '../../css/t/tvbc5806l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="zj4jkob1y"/><path class="ohdrrobob"/><rect class="wrsw32bnx"/><path class="tvbc5806l"/></g>`,
		"fallback": "icon-park:lamp",
	});
}

export default Component;
