import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/acmys3bun.css';
import '../../css/b/b0dzodgfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="acmys3bun"/><path class="b0dzodgfz"/></g>`,
		"fallback": "hugeicons:trending-up",
	});
}

export default Component;
