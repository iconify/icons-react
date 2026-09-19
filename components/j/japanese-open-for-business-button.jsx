import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jr4x2ccjb.css';
import '../../css/x/xqq2_1fmb.css';
import '../../css/g/grlduunsq.css';
import '../../css/b/bkqbhrlym.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jr4x2ccjb"/><path class="xqq2_1fmb"/><path class="grlduunsq"/><path class="bkqbhrlym"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-open-for-business-button",
	});
}

export default Component;
