import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lx0uz-bqb.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/w/wjr_4_bgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lx0uz-bqb"/><path class="yjo9i5b3u"/><path class="wjr_4_bgf"/></g>`,
		"fallback": "hugeicons:shopping-basket-remove-02",
	});
}

export default Component;
