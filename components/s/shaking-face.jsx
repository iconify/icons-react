import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e8hb2u8yg.css';
import '../../css/y/yd2z58hmr.css';
import '../../css/g/gv0c9mbvs.css';
import '../../css/u/u3cz6_v6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e8hb2u8yg"/><path class="yd2z58hmr"/><path class="gv0c9mbvs"/><path class="u3cz6_v6o"/></g>`,
		"fallback": "fluent-emoji-high-contrast:shaking-face",
	});
}

export default Component;
