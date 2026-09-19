import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wtc67qbno.css';
import '../../css/e/ekwamnsnd.css';
import '../../css/e/ep-8rwk8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wtc67qbno"/><circle class="ekwamnsnd"/><path class="ep-8rwk8d"/></g>`,
		"fallback": "hugeicons:teaching",
	});
}

export default Component;
