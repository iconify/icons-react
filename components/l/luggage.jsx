import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jd_d7_oyj.css';
import '../../css/k/kffd6nbeo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jd_d7_oyj"/><path class="kffd6nbeo"/></g>`,
		"fallback": "bi:luggage",
	});
}

export default Component;
