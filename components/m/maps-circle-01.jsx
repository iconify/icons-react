import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/v9n4_-buy.css';
import '../../css/r/rb7jyciyp.css';
import '../../css/m/mok3xxbso.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="v9n4_-buy"/><path class="rb7jyciyp"/><path class="mok3xxbso"/></g>`,
		"fallback": "hugeicons:maps-circle-01",
	});
}

export default Component;
