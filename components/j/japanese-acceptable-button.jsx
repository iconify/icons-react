import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-pq4_buo.css';
import '../../css/h/h4y7j5ljz.css';
import '../../css/b/bt58twbca.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s-pq4_buo"/><path class="h4y7j5ljz"/><path class="bt58twbca"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-acceptable-button",
	});
}

export default Component;
