import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qyhg1pbgh.css';
import '../../css/v/v4i6_xbmw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qyhg1pbgh"/><path class="v4i6_xbmw"/></g>`,
		"fallback": "marketeq:laptop-2",
	});
}

export default Component;
