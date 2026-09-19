import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/t/t7vkg9zjn.css';
import '../../css/k/k3ksccc2w.css';
import '../../css/x/x72ys60gu.css';
import '../../css/k/kuujrvmcb.css';
import '../../css/k/kg79jrbam.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="t7vkg9zjn"/><path class="k3ksccc2w"/><path class="x72ys60gu"/><path class="kuujrvmcb"/><path class="kg79jrbam"/></g>`,
		"fallback": "circle-flags:kn",
	});
}

export default Component;
