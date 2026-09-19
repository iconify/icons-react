import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zvrlw2b3h.css';
import '../../css/d/dasqow5bx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zvrlw2b3h"/><path class="dasqow5bx"/></g>`,
		"fallback": "hugeicons:origami",
	});
}

export default Component;
