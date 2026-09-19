import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tg7r5obnp.css';
import '../../css/a/ar0z5_bbv.css';
import '../../css/a/aotcudf0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tg7r5obnp"/><path class="ar0z5_bbv"/><path class="aotcudf0u"/></g>`,
		"fallback": "hugeicons:transition-right",
	});
}

export default Component;
