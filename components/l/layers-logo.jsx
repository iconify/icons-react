import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-v3vrb3z.css';
import '../../css/m/mhtdy_mav.css';
import '../../css/y/yb2lqrucn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o-v3vrb3z"/><path class="mhtdy_mav"/><path class="yb2lqrucn"/></g>`,
		"fallback": "hugeicons:layers-logo",
	});
}

export default Component;
