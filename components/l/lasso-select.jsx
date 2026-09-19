import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s_tr8_b_s.css';
import '../../css/r/r3yzx8bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s_tr8_b_s"/><path class="r3yzx8bla"/></g>`,
		"fallback": "hugeicons:lasso-select",
	});
}

export default Component;
