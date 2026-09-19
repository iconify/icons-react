import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t08lfbbqm.css';
import '../../css/f/fttg634dd.css';
import '../../css/g/g6jaddcnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t08lfbbqm"/><path class="fttg634dd"/><path class="g6jaddcnb"/></g>`,
		"fallback": "healthicons:virus-sanitizer-spray",
	});
}

export default Component;
