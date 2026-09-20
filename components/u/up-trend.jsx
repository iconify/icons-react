import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/k_nuvgqxx.css';
import '../../css/l/lsm83q7-d.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="k_nuvgqxx"/><path class="lsm83q7-d"/></g>`,
		"fallback": "marketeq:up-trend",
	});
}

export default Component;
