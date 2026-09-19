import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a4i1q2urh.css';
import '../../css/x/xmloepz8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a4i1q2urh"/><path class="xmloepz8m"/></g>`,
		"fallback": "hugeicons:notification-block-01",
	});
}

export default Component;
