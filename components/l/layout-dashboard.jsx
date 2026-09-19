import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjyjkeb1p.css';
import '../../css/q/qp_8s_b-l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="yjyjkeb1p"/><path class="qp_8s_b-l"/></g>`,
		"fallback": "charm:layout-dashboard",
	});
}

export default Component;
