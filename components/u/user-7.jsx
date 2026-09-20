import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/w/weo8h2d-l.css';
import '../../css/j/ju4d0lblh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="weo8h2d-l"/><path class="ju4d0lblh"/></g>`,
		"fallback": "marketeq:user-7",
	});
}

export default Component;
