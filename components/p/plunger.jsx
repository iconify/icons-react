import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/xtyv_sy2d.css';
import '../../css/j/jy6munbhk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="xtyv_sy2d"/><path class="jy6munbhk"/></g>`,
		"fallback": "marketeq:plunger",
	});
}

export default Component;
