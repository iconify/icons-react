import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/r/rtrjxzg8l.css';
import '../../css/x/xk_xbzbbz.css';
import '../../css/i/i-097zb-k.css';
import '../../css/p/pwf5t39du.css';
import '../../css/j/j96qlr67y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="rtrjxzg8l"/><path class="xk_xbzbbz"/><path class="i-097zb-k"/><path class="pwf5t39du"/><path class="j96qlr67y"/></g>`,
		"fallback": "streamline:transfer-motorcycle",
	});
}

export default Component;
