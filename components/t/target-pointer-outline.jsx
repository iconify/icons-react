import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3gipu1po.css';
import '../../css/y/y8h6vn74e.css';
import '../../css/w/wvus26bbw.css';
import '../../css/j/jhzbhlbgi.css';
import '../../css/p/p3smhmbat.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u3gipu1po"/><path class="y8h6vn74e"/><path class="wvus26bbw"/><path class="jhzbhlbgi"/><path class="p3smhmbat"/></g>`,
		"fallback": "glyphs:target-pointer-outline",
	});
}

export default Component;
