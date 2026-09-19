import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/znqyb1tcx.css';
import '../../css/r/raxiec61z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="znqyb1tcx"/><path class="raxiec61z"/></g>`,
		"fallback": "hugeicons:shopping-bag-01",
	});
}

export default Component;
