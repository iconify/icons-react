import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/ss9mow7ak.css';
import '../../css/t/tn2sh5bsg.css';
import '../../css/x/xd6cdabmp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="ss9mow7ak"/><path class="tn2sh5bsg"/><path class="xd6cdabmp"/></g>`,
		"fallback": "marketeq:music-disable",
	});
}

export default Component;
