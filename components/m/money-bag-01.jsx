import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yv5n49_tc.css';
import '../../css/m/mpznc0bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yv5n49_tc"/><path class="mpznc0bgx"/></g>`,
		"fallback": "hugeicons:money-bag-01",
	});
}

export default Component;
