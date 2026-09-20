import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c0sioac0q.css';
import '../../css/l/lqp2b9btq.css';
import '../../css/l/lh2z7ynqy.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="c0sioac0q"/><path class="lqp2b9btq"/><path class="lh2z7ynqy"/></g>`,
		"fallback": "marketeq:wallet",
	});
}

export default Component;
