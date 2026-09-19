import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/esso3_bvo.css';
import '../../css/h/hdb1zcbyi.css';
import '../../css/n/nu9hkkb5n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="esso3_bvo"/><path class="hdb1zcbyi"/><path class="nu9hkkb5n"/></g>`,
		"fallback": "fluent-emoji-high-contrast:prince",
	});
}

export default Component;
