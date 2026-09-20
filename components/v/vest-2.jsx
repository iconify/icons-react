import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/syvs5h-jc.css';
import '../../css/j/ji0ebbb0r.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="syvs5h-jc"/><path class="ji0ebbb0r"/></g>`,
		"fallback": "marketeq:vest-2",
	});
}

export default Component;
