import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/x5octn5bj.css';
import '../../css/b/bju41t33t.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="x5octn5bj"/><path class="bju41t33t"/></g>`,
		"fallback": "marketeq:monitor",
	});
}

export default Component;
