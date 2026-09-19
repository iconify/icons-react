import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cstiu_bty.css';
import '../../css/t/t8dwkxw1q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cstiu_bty"/><path class="t8dwkxw1q"/></g>`,
		"fallback": "fluent-emoji-high-contrast:sad-but-relieved-face",
	});
}

export default Component;
