import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x1aq_zb1l.css';
import '../../css/o/oblmn2yok.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/e/eg4xct43z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="x1aq_zb1l"/><path class="oblmn2yok"/><path class="yjo9i5b3u"/><path class="eg4xct43z"/></g>`,
		"fallback": "hugeicons:shopping-basket-done-02",
	});
}

export default Component;
