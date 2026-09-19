import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cee13rb4e.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/h/hj8o_dx2p.css';
import '../../css/n/np00yb5tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cee13rb4e"/><path class="yjo9i5b3u"/><path class="hj8o_dx2p"/><path class="np00yb5tm"/></g>`,
		"fallback": "hugeicons:shopping-basket-secure-02",
	});
}

export default Component;
