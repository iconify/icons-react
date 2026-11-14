import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/df0qolbbi.css';
import '../../css/d/dwymtlb_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="df0qolbbi"/><path class="dwymtlb_w"/></g>`,
		"fallback": "evicons:solar-charging",
	});
}

export default Component;
