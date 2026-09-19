import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/u-jpu6bpu.css';
import '../../css/k/kbldvwb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="u-jpu6bpu"/><path class="kbldvwb2t"/></g>`,
		"fallback": "hugeicons:sofa-03",
	});
}

export default Component;
