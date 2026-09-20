import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tatc_ib4h.css';
import '../../css/e/e5ez0gb3n.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tatc_ib4h"/><path class="e5ez0gb3n"/></g>`,
		"fallback": "marketeq:karaoke",
	});
}

export default Component;
