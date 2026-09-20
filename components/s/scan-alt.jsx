import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tyorz8b1c.css';
import '../../css/h/htrjajb8j.css';
import '../../css/y/yqr712bef.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="tyorz8b1c"/><path class="htrjajb8j"/><path class="yqr712bef"/></g>`,
		"fallback": "marketeq:scan-alt",
	});
}

export default Component;
