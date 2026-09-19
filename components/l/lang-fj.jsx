import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/j/jb-6bbccy.css';
import '../../css/v/v68-p4tdh.css';
import '../../css/c/cqtyi9boj.css';
import '../../css/l/lr1twzbxz.css';
import '../../css/h/hpygl8bsp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="jb-6bbccy"/><path class="v68-p4tdh"/><path class="cqtyi9boj"/><path class="lr1twzbxz"/><path class="hpygl8bsp"/></g>`,
		"fallback": "circle-flags:lang-fj",
	});
}

export default Component;
