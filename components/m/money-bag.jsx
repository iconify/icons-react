import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/odz5yibcn.css';
import '../../css/j/j-yb9dbtx.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="odz5yibcn"/><path class="j-yb9dbtx"/></g>`,
		"fallback": "marketeq:money-bag",
	});
}

export default Component;
