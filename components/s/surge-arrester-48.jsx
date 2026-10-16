import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z53h8x6cn.css';
import '../../css/j/j58ps0w4k.css';
import '../../css/o/ob5windhy.css';
import '../../css/e/eiaru3xjb.css';
import '../../css/n/np5h__d8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z53h8x6cn"/><path class="j58ps0w4k"/><path class="ob5windhy"/><path class="eiaru3xjb"/><path class="np5h__d8v"/>`,
		"fallback": "energy-icons:surge-arrester-48",
	});
}

export default Component;
