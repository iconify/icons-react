import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c91s5ub3o.css';
import '../../css/k/k45dlwhns.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c91s5ub3o"/><path class="k45dlwhns"/></g>`,
		"fallback": "marketeq:safebox",
	});
}

export default Component;
