import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mhjkkac0m.css';
import '../../css/w/wfu6nh6bn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mhjkkac0m"/><path class="wfu6nh6bn"/></g>`,
		"fallback": "hugeicons:searching",
	});
}

export default Component;
