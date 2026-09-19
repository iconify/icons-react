import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/ryredw2lh.css';
import '../../css/q/qznxftb5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ryredw2lh"/><path class="qznxftb5v"/></g>`,
		"fallback": "hugeicons:look-bottom",
	});
}

export default Component;
