import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxbbx8_7s.css';
import '../../css/i/i89nsvvof.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bxbbx8_7s"/><path class="i89nsvvof"/></g>`,
		"fallback": "bi:postage",
	});
}

export default Component;
