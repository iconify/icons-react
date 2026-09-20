import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tza10u88t.css';
import '../../css/j/j4ztgsbzo.css';
import '../../css/b/bz4_leuvc.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tza10u88t"/><path class="j4ztgsbzo"/><path class="bz4_leuvc"/></g>`,
		"fallback": "marketeq:wallet-alt-2",
	});
}

export default Component;
