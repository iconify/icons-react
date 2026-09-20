import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/cwg-o_b4t.css';
import '../../css/k/kufjezbjx.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="cwg-o_b4t"/><path class="kufjezbjx"/></g>`,
		"fallback": "marketeq:sofa",
	});
}

export default Component;
