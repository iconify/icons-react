import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jvi2atbia.css';
import '../../css/f/f3pw89b2c.css';
import '../../css/j/j34gbswxf.css';
import '../../css/o/o_b_kpgnh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jvi2atbia"/><path clip-rule="evenodd" class="f3pw89b2c"/><path class="j34gbswxf"/><path clip-rule="evenodd" class="o_b_kpgnh"/></g>`,
		"fallback": "glyphs:paste-bold",
	});
}

export default Component;
