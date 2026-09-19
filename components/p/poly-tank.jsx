import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zd731db9w.css';
import '../../css/a/afa550bhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zd731db9w"/><path class="afa550bhi"/></g>`,
		"fallback": "hugeicons:poly-tank",
	});
}

export default Component;
