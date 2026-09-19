import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/azkq_8d6w.css';
import '../../css/m/m2l6d-bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="azkq_8d6w"/><path class="m2l6d-bhl"/></g>`,
		"fallback": "hugeicons:task-done-02",
	});
}

export default Component;
