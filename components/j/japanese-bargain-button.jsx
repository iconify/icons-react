import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nq99_rblr.css';
import '../../css/e/ekdr8lv2x.css';
import '../../css/b/bt58twbca.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nq99_rblr"/><path class="ekdr8lv2x"/><path class="bt58twbca"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-bargain-button",
	});
}

export default Component;
