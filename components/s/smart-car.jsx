import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a40r9nbyy.css';
import '../../css/h/h6o4s7bkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a40r9nbyy"/><path class="h6o4s7bkq"/></g>`,
		"fallback": "reicon:smart-car",
	});
}

export default Component;
