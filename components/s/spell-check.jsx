import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h43dfjpqa.css';
import '../../css/x/xj1oj2qns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h43dfjpqa"/><path class="xj1oj2qns"/></g>`,
		"fallback": "iconaut:spell-check",
	});
}

export default Component;
