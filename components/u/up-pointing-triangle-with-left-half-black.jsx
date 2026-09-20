import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmt07fb9n.css';
import '../../css/u/uuy4bnjza.css';
import '../../css/c/ccgir63iw.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/t1de8ccuc.css';
import '../../css/w/wzdw02b4v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bmt07fb9n"/><path class="uuy4bnjza"/><path class="ccgir63iw"/><g class="brzn_0bpr"><path class="t1de8ccuc"/><path class="wzdw02b4v"/></g>`,
		"fallback": "openmoji:up-pointing-triangle-with-left-half-black",
	});
}

export default Component;
