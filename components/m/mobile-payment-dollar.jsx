import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qqgjflb3z.css';
import '../../css/a/a_9et877l.css';
import '../../css/k/k5qf8o2ef.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="qqgjflb3z"/><path class="a_9et877l"/><path class="k5qf8o2ef"/></g>`,
		"fallback": "marketeq:mobile-payment-dollar",
	});
}

export default Component;
