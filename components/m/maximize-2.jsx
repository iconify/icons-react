import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/r/r5_lmzb8s.css';
import '../../css/d/d7vrg_b1x.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="r5_lmzb8s"/><path class="d7vrg_b1x"/></g>`,
		"fallback": "marketeq:maximize-2",
	});
}

export default Component;
