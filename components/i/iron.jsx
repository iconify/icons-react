import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/o/osh0h0p7g.css';
import '../../css/o/ocdk10b8f.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="osh0h0p7g"/><path class="ocdk10b8f"/></g>`,
		"fallback": "marketeq:iron",
	});
}

export default Component;
