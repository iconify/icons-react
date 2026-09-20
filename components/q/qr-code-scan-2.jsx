import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/x/x1bwm7h4i.css';
import '../../css/z/z3icq7bmz.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="x1bwm7h4i"/><path class="z3icq7bmz"/></g>`,
		"fallback": "marketeq:qr-code-scan-2",
	});
}

export default Component;
