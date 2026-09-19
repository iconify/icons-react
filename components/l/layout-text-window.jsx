import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z780m325j.css';
import '../../css/z/zwxxv2beb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z780m325j"/><path class="zwxxv2beb"/></g>`,
		"fallback": "bi:layout-text-window",
	});
}

export default Component;
