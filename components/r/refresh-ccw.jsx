import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tdb6510je.css';
import '../../css/p/ps6deztrf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tdb6510je"/><path class="ps6deztrf"/></g>`,
		"fallback": "hugeicons:refresh-ccw",
	});
}

export default Component;
