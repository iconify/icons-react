import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m1qfgubcd.css';
import '../../css/b/bxv6uybla.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m1qfgubcd"/><path class="bxv6uybla"/></g>`,
		"fallback": "fluent-emoji-high-contrast:nazar-amulet",
	});
}

export default Component;
