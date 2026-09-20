import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/j/j0fzkbltx.css';
import '../../css/i/imstvac3c.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="j0fzkbltx"/><path class="imstvac3c"/></g>`,
		"fallback": "marketeq:square-root-square",
	});
}

export default Component;
