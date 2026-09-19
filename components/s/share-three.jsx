import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ei8r_uaoc.css';
import '../../css/z/zjkgqpooy.css';
import '../../css/s/s_sqn_0_b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ei8r_uaoc"/><path class="zjkgqpooy"/><path class="s_sqn_0_b"/></g>`,
		"fallback": "icon-park:share-three",
	});
}

export default Component;
