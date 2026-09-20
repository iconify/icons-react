import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/l/lzo97g7dy.css';
import '../../css/q/qen2v3b7h.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="lzo97g7dy"/><path class="qen2v3b7h"/></g>`,
		"fallback": "marketeq:truck-lift",
	});
}

export default Component;
