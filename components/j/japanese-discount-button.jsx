import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8fy26bxq.css';
import '../../css/r/rpl4p86cc.css';
import '../../css/b/bkqbhrlym.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n8fy26bxq"/><path class="rpl4p86cc"/><path class="bkqbhrlym"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-discount-button",
	});
}

export default Component;
