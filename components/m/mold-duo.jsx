import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wpmummbxh.css';
import '../../css/y/yoa2b53_o.css';
import '../../css/d/dnua4t4hy.css';
import '../../css/c/ceimyk5qg.css';
import '../../css/s/sc4tpsbdd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wpmummbxh"/><path class="yoa2b53_o"/><path class="dnua4t4hy"/><path class="ceimyk5qg"/><path class="sc4tpsbdd"/></g>`,
		"fallback": "glyphs:mold-duo",
	});
}

export default Component;
