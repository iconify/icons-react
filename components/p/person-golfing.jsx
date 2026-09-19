import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cw83oib4z.css';
import '../../css/t/t7upphb2s.css';
import '../../css/i/iku2ktmva.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cw83oib4z"/><path class="t7upphb2s"/><path class="iku2ktmva"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-golfing",
	});
}

export default Component;
