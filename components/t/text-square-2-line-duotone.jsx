import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8jqvvkfv.css';
import '../../css/l/lhx-r4bhy.css';
import '../../css/f/fbyc4_bzy.css';
import '../../css/e/erf8l4xce.css';
import '../../css/h/hf617yxtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="e8jqvvkfv"/><path class="lhx-r4bhy"/><path class="fbyc4_bzy"/><path class="erf8l4xce"/><path class="hf617yxtt"/></g>`,
		"fallback": "solar:text-square-2-line-duotone",
	});
}

export default Component;
