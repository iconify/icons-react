import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/jpd9qx9sf.css';
import '../../css/j/jxij94gpp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="jpd9qx9sf"/><path class="jxij94gpp"/></g>`,
		"fallback": "marketeq:notification-alt",
	});
}

export default Component;
