import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8t6n02ex.css';
import '../../css/o/ogk_lq8ei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s8t6n02ex"/><path class="ogk_lq8ei"/></g>`,
		"fallback": "hugeicons:kite",
	});
}

export default Component;
