import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_3rx-6fq.css';
import '../../css/z/zh5fxckch.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_3rx-6fq"/><path class="zh5fxckch"/></g>`,
		"fallback": "at-icons:stats",
	});
}

export default Component;
