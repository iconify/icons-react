import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pplftgbrn.css';
import '../../css/l/l0v595b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pplftgbrn"/><path class="l0v595b1p"/></g>`,
		"fallback": "iconoir:lot-of-cash",
	});
}

export default Component;
