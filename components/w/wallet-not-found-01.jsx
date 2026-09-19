import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/busrn3bwc.css';
import '../../css/w/worcco0zv.css';
import '../../css/e/eswimnb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="busrn3bwc"/><path class="worcco0zv"/><path class="eswimnb4q"/></g>`,
		"fallback": "hugeicons:wallet-not-found-01",
	});
}

export default Component;
