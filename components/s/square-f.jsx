import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ektbiy3tl.css';
import '../../css/u/ul0zf-f3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ektbiy3tl"/><path class="ul0zf-f3b"/></g>`,
		"fallback": "hugeicons:square-f",
	});
}

export default Component;
