import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i89nsvvof.css';
import '../../css/l/lppcthv9a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i89nsvvof"/><path class="lppcthv9a"/></g>`,
		"fallback": "bi:postage-heart",
	});
}

export default Component;
