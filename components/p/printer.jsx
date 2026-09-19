import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fxzlzb8ls.css';
import '../../css/m/m9dcbllck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fxzlzb8ls"/><path class="m9dcbllck"/></g>`,
		"fallback": "hugeicons:printer",
	});
}

export default Component;
