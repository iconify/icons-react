import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/q34uoc_jx.css';
import '../../css/m/mjnf56h0b.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="q34uoc_jx"/><path class="mjnf56h0b"/></g>`,
		"fallback": "marketeq:vibrate",
	});
}

export default Component;
