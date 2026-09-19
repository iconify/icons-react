import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ic15dcfue.css';
import '../../css/e/eur6k0t3q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ic15dcfue"/><path class="eur6k0t3q"/></g>`,
		"fallback": "bi:radioactive",
	});
}

export default Component;
