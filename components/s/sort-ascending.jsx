import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zkt-xzj9a.css';
import '../../css/q/qf2zm1czz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="zkt-xzj9a"/><path class="qf2zm1czz"/></g>`,
		"fallback": "marketeq:sort-ascending",
	});
}

export default Component;
