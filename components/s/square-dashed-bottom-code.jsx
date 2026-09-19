import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bf7po7_qs.css';
import '../../css/e/ey4tdb-pv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bf7po7_qs"/><path class="ey4tdb-pv"/></g>`,
		"fallback": "hugeicons:square-dashed-bottom-code",
	});
}

export default Component;
