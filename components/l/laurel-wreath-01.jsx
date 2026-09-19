import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jdvg7ibyp.css';
import '../../css/n/nvvquibjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jdvg7ibyp"/><path class="nvvquibjo"/></g>`,
		"fallback": "hugeicons:laurel-wreath-01",
	});
}

export default Component;
