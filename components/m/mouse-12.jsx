import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/ws0weable.css';
import '../../css/p/pdmaa-4wh.css';
import '../../css/j/jcyhgg-5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ws0weable"/><path class="pdmaa-4wh"/><path class="jcyhgg-5l"/></g>`,
		"fallback": "hugeicons:mouse-12",
	});
}

export default Component;
