import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njw-inbke.css';
import '../../css/m/mjfupnnaf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="njw-inbke"/><path class="mjfupnnaf"/></g>`,
		"fallback": "bi:luggage-fill",
	});
}

export default Component;
