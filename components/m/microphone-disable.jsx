import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/h-quebj5u.css';
import '../../css/n/n2eo51h-v.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="h-quebj5u"/><path class="n2eo51h-v"/></g>`,
		"fallback": "marketeq:microphone-disable",
	});
}

export default Component;
