import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e6ubjbbgg.css';
import '../../css/a/aznwbrbwl.css';
import '../../css/f/fco_zwbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e6ubjbbgg"/><path class="aznwbrbwl"/><path class="fco_zwbfx"/></g>`,
		"fallback": "hugeicons:send-to-mobile",
	});
}

export default Component;
