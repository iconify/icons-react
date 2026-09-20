import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qe1_6__vu.css';
import '../../css/y/y1u-2k36e.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qe1_6__vu"/><path class="y1u-2k36e"/></g>`,
		"fallback": "marketeq:left-right-arrow",
	});
}

export default Component;
