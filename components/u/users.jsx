import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/aemyv_bct.css';
import '../../css/y/yma8que2u.css';
import '../../css/o/oi7oksbqj.css';
import '../../css/k/ky-4twbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="aemyv_bct"/><circle class="yma8que2u"/><path class="oi7oksbqj"/><path class="ky-4twbxw"/></g>`,
		"fallback": "hugeicons:users",
	});
}

export default Component;
