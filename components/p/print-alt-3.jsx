import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xpozrlb4w.css';
import '../../css/z/z5w6g_kni.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xpozrlb4w"/><path class="z5w6g_kni"/></g>`,
		"fallback": "marketeq:print-alt-3",
	});
}

export default Component;
