import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c-w5_4d6j.css';
import '../../css/t/tys1rgb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c-w5_4d6j"/><path class="tys1rgb7q"/></g>`,
		"fallback": "reicon:ship",
	});
}

export default Component;
