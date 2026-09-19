import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kdfbz6i8l.css';
import '../../css/x/xu0one_4p.css';
import '../../css/b/boxfqhb0s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kdfbz6i8l"/><path class="xu0one_4p"/><path class="boxfqhb0s"/></g>`,
		"fallback": "glyphs:sort-alpha-up-bold",
	});
}

export default Component;
