import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b_pl27b6t.css';
import '../../css/z/ziild8bri.css';
import '../../css/m/ml-yuzelm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b_pl27b6t"/><path class="ziild8bri"/><path class="ml-yuzelm"/></g>`,
		"fallback": "hugeicons:money-not-found-03",
	});
}

export default Component;
