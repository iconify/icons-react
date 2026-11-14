import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wkem_ebde.css';
import '../../css/p/pk8hibb5s.css';
import '../../css/a/avc6w_f8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wkem_ebde"/><path class="pk8hibb5s"/><path class="avc6w_f8t"/></g>`,
		"fallback": "hugeicons:mail-account-02",
	});
}

export default Component;
