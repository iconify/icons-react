import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iy-ypfb-y.css';
import '../../css/w/wp5miio0i.css';
import '../../css/m/mfww41mlc.css';
import '../../css/w/wkew4v43y.css';
import '../../css/j/jy45f8puk.css';
import '../../css/m/mzekj0a9e.css';
import '../../css/c/covmgvimc.css';
import '../../css/w/wy-9yw0bt.css';
import '../../css/p/pvotfl8ci.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGbDH6ubpA)"><mask id="SVGTGyWzcdO" width="14" height="14" x="1" y="1" maskUnits="userSpaceOnUse" style="mask-type:alpha"><circle class="iy-ypfb-y"/></mask><g mask="url(#SVGTGyWzcdO)"><path class="wp5miio0i"/><mask id="SVGn718Id0i" width="12" height="8" x="4" y="9" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path class="mfww41mlc"/></mask><g mask="url(#SVGn718Id0i)"><path class="wkew4v43y"/></g><path class="jy45f8puk"/></g><circle class="mzekj0a9e"/><path class="covmgvimc"/><path class="wy-9yw0bt"/></g><defs><clipPath id="SVGbDH6ubpA"><path class="pvotfl8ci"/></clipPath></defs></g>`,
		"fallback": "catppuccin:wally",
	});
}

export default Component;
