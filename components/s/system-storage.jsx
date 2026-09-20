import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dk71obc9n.css';
import '../../css/y/yuj_2st2s.css';
import '../../css/r/re1s79shu.css';
import '../../css/p/pje17r6po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dk71obc9n"/><path class="yuj_2st2s"/><path class="re1s79shu"/><path class="pje17r6po"/></g>`,
		"fallback": "tdesign:system-storage",
	});
}

export default Component;
