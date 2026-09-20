import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/p/prunzyb5d.css';
import '../../css/b/blb5mn7bh.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="prunzyb5d"/><path class="blb5mn7bh"/></g>`,
		"fallback": "marketeq:notification-bell",
	});
}

export default Component;
