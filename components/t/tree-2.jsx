import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/x_74_wbzq.css';
import '../../css/x/xy99vvbdw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="x_74_wbzq"/><path class="xy99vvbdw"/></g>`,
		"fallback": "marketeq:tree-2",
	});
}

export default Component;
