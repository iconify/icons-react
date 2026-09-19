import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/oa0-72i1l.css';
import '../../css/q/qu5nk8u-q.css';
import '../../css/p/p9ojn-bgd.css';
import '../../css/o/oa9d-wg2b.css';
import '../../css/u/uar13_bfl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="oa0-72i1l"/><path class="qu5nk8u-q"/><path class="p9ojn-bgd"/><path class="oa9d-wg2b"/><path class="uar13_bfl"/></g>`,
		"fallback": "circle-flags:uz",
	});
}

export default Component;
