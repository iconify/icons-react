import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mmkmjhbou.css';
import '../../css/m/mnyhz-3oo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mmkmjhbou"/><path class="mnyhz-3oo"/></g>`,
		"fallback": "rivet-icons:rss",
	});
}

export default Component;
