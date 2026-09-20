import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bvgtbqbgc.css';
import '../../css/z/zloqlfbao.css';
import '../../css/r/r7bywrkfh.css';
import '../../css/t/tihfs1bkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bvgtbqbgc"/><path class="zloqlfbao"/><path class="r7bywrkfh"/><path class="tihfs1bkz"/></g>`,
		"fallback": "mage:notification-bell-question-mark",
	});
}

export default Component;
