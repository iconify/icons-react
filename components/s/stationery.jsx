import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_sh1-wma.css';
import '../../css/y/y15c62b3m.css';
import '../../css/z/ztt3ox3cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j_sh1-wma"/><path class="y15c62b3m"/><path class="ztt3ox3cd"/></g>`,
		"fallback": "hugeicons:stationery",
	});
}

export default Component;
