import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lxezjuc9o.css';
import '../../css/f/fwspsvidw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lxezjuc9o"/><path class="fwspsvidw"/></g>`,
		"fallback": "hugeicons:shopping-bag-favorite",
	});
}

export default Component;
