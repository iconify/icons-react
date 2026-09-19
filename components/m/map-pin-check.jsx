import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y_ggmwbci.css';
import '../../css/l/l3b_1nbnj.css';
import '../../css/r/r2une0btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y_ggmwbci"/><path class="l3b_1nbnj"/><path class="r2une0btx"/></g>`,
		"fallback": "hugeicons:map-pin-check",
	});
}

export default Component;
