import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mhu9k5_pu.css';
import '../../css/e/e-ol1g8zb.css';
import '../../css/m/mtjya3hdf.css';
import '../../css/r/r-toaehia.css';
import '../../css/l/l98r4-bsa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="mhu9k5_pu"/><path class="e-ol1g8zb"/><path class="mtjya3hdf"/><path class="r-toaehia"/><path class="l98r4-bsa"/></g>`,
		"fallback": "circle-flags:pa",
	});
}

export default Component;
