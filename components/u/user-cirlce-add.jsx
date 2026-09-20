import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u4vh7gcjc.css';
import '../../css/d/dnl8j0wnh.css';
import '../../css/u/u6t3q4b3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u4vh7gcjc"/><path class="dnl8j0wnh"/><path class="u6t3q4b3i"/></g>`,
		"fallback": "reicon:user-cirlce-add",
	});
}

export default Component;
