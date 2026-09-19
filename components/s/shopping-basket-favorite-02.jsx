import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mtweo9b7w.css';
import '../../css/e/emjzqgb3y.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/x/xpbdn4bfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mtweo9b7w"/><path class="emjzqgb3y"/><path class="yjo9i5b3u"/><path class="xpbdn4bfy"/></g>`,
		"fallback": "hugeicons:shopping-basket-favorite-02",
	});
}

export default Component;
