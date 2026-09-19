import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i64-1ebxw.css';
import '../../css/y/ysvgjxbjj.css';
import '../../css/t/tlifriksx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="i64-1ebxw"/><path class="ysvgjxbjj"/><circle class="tlifriksx"/></g>`,
		"fallback": "hugeicons:ship-wheel",
	});
}

export default Component;
