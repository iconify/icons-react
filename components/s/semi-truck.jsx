import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bv9byxb_f.css';
import '../../css/v/v5vuq7yua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bv9byxb_f"/><path class="v5vuq7yua"/></g>`,
		"fallback": "hugeicons:semi-truck",
	});
}

export default Component;
