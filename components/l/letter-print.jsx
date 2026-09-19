import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n9zc5cbms.css';
import '../../css/r/r4hbm720t.css';
import '../../css/a/anypatboj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="n9zc5cbms"/><path clip-rule="evenodd" class="r4hbm720t"/><path clip-rule="evenodd" class="anypatboj"/></g>`,
		"fallback": "pepicons:letter-print",
	});
}

export default Component;
