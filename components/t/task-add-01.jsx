import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tnsj789wj.css';
import '../../css/j/jk9z-8blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tnsj789wj"/><path class="jk9z-8blt"/></g>`,
		"fallback": "hugeicons:task-add-01",
	});
}

export default Component;
