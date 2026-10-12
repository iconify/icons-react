import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fjiyl86rn.css';
import '../../css/l/l5jpaub3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fjiyl86rn"/><path class="l5jpaub3n"/></g>`,
		"fallback": "andrsrxn:stroke-style",
	});
}

export default Component;
