import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hav_9b5ms.css';
import '../../css/j/jmluh1b1c.css';
import '../../css/l/ltnpeeb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hav_9b5ms"/><path class="jmluh1b1c"/><path class="ltnpeeb1q"/></g>`,
		"fallback": "hugeicons:setting-done-01",
	});
}

export default Component;
