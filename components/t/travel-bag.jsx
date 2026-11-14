import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/atl062bai.css';
import '../../css/f/f8z74ubhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="atl062bai"/><path class="f8z74ubhl"/></g>`,
		"fallback": "hugeicons:travel-bag",
	});
}

export default Component;
