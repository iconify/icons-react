import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/f8gr8zbkt.css';
import '../../css/u/ub5vbibdc.css';
import '../../css/t/tac_ulo3k.css';
import '../../css/y/ycdtgb15n.css';
import '../../css/z/zyc_r8bkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="f8gr8zbkt"/><path class="ub5vbibdc"/><path class="tac_ulo3k"/><path class="ycdtgb15n"/><path class="zyc_r8bkn"/></g>`,
		"fallback": "circle-flags:lang-si",
	});
}

export default Component;
