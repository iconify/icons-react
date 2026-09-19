import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lyl5rtb9m.css';
import '../../css/c/col8s83ww.css';
import '../../css/b/boxfqhb0s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lyl5rtb9m"/><path class="col8s83ww"/><path class="boxfqhb0s"/></g>`,
		"fallback": "glyphs:sort-alpha-down-bold",
	});
}

export default Component;
