import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/k/knqu0ylaq.css';
import '../../css/n/nvuqxsbrk.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="knqu0ylaq"/><path class="nvuqxsbrk"/></g>`,
		"fallback": "marketeq:minimize",
	});
}

export default Component;
