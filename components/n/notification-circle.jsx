import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/prunzyb5d.css';
import '../../css/w/w5_cz8xgt.css';
import '../../css/i/i8gugobaw.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="prunzyb5d"/><path class="w5_cz8xgt"/><path class="i8gugobaw"/></g>`,
		"fallback": "marketeq:notification-circle",
	});
}

export default Component;
