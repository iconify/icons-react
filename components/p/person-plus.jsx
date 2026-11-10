import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdj5xab5v.css';
import '../../css/e/ej5mt2biz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gdj5xab5v"/><path class="ej5mt2biz"/></g>`,
		"fallback": "at-icons:person-plus",
	});
}

export default Component;
