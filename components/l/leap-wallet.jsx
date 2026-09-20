import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j8bqdtl8x.css';
import '../../css/k/k0j2rac5e.css';
import '../../css/i/ip44jtdsq.css';
import '../../css/a/ai3xo7qdw.css';
import '../../css/t/tj-i09byl.css';

const viewBox = {"width":166,"height":166};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j8bqdtl8x"/><path class="k0j2rac5e"/><path class="ip44jtdsq"/><path class="ai3xo7qdw"/><path class="tj-i09byl"/></g>`,
		"fallback": "thesvg-color:leap-wallet",
	});
}

export default Component;
