import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/y/ys6e26bgg.css';
import '../../css/v/vxfjjw1xy.css';
import '../../css/z/ztk0pg78c.css';
import '../../css/o/osc9nwrqm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="ys6e26bgg"/><path class="vxfjjw1xy"/><path class="ztk0pg78c"/><path class="osc9nwrqm"/></g>`,
		"fallback": "circle-flags:re",
	});
}

export default Component;
