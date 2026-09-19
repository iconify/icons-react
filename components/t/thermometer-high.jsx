import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ptq8kpv7f.css';
import '../../css/j/ja0383bua.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ptq8kpv7f"/><path class="ja0383bua"/></g>`,
		"fallback": "bi:thermometer-high",
	});
}

export default Component;
