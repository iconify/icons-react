import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/d/dcaq4v6om.css';
import '../../css/k/k_g40ac-s.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="dcaq4v6om"/><path class="k_g40ac-s"/></g>`,
		"fallback": "marketeq:recycle",
	});
}

export default Component;
