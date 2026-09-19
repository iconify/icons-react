import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ir6g6mb-h.css';
import '../../css/p/p0dbfhb3v.css';
import '../../css/m/mltui_b5w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ir6g6mb-h"/><path class="p0dbfhb3v"/><path class="mltui_b5w"/></g>`,
		"fallback": "fluent-emoji-high-contrast:spaghetti",
	});
}

export default Component;
