import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kkw346b-m.css';
import '../../css/z/za2xzwbap.css';
import '../../css/p/p6cscdbxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kkw346b-m"/><path class="za2xzwbap"/><path class="p6cscdbxp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:spouting-whale",
	});
}

export default Component;
