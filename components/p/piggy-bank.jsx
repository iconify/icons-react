import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/omy4due_w.css';
import '../../css/a/ay-kp8bpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="omy4due_w"/><path class="ay-kp8bpl"/></g>`,
		"fallback": "hugeicons:piggy-bank",
	});
}

export default Component;
