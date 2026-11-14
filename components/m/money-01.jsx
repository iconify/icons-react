import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/ao328ib6p.css';
import '../../css/d/dgn65lb1h.css';
import '../../css/t/tl_x59b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ao328ib6p"/><path class="dgn65lb1h"/><path class="tl_x59b9b"/></g>`,
		"fallback": "hugeicons:money-01",
	});
}

export default Component;
