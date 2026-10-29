import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pnw747ntt.css';
import '../../css/r/rz1izdbtt.css';
import '../../css/e/e8u9hlbvz.css';
import '../../css/v/vo6e5ybat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="pnw747ntt wm-deco"/><path class="rz1izdbtt wm-deco"/><path class="e8u9hlbvz"/><path class="vo6e5ybat"/></g>`,
		"fallback": "withicons:paperclip-blueprint",
	});
}

export default Component;
