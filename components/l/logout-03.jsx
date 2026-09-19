import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o41m8lb5r.css';
import '../../css/k/k9f04dteg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o41m8lb5r"/><path class="k9f04dteg"/></g>`,
		"fallback": "hugeicons:logout-03",
	});
}

export default Component;
