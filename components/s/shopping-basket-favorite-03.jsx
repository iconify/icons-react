import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rtrczgbgk.css';
import '../../css/s/sqtvjacne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rtrczgbgk"/><path class="sqtvjacne"/></g>`,
		"fallback": "hugeicons:shopping-basket-favorite-03",
	});
}

export default Component;
