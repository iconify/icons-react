import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/x/x2z_rsb1z.css';
import '../../css/n/n5ebylmjb.css';
import '../../css/a/as2017bxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="x2z_rsb1z"/><path class="n5ebylmjb"/><rect class="as2017bxh"/></g>`,
		"fallback": "icon-park:intersection",
	});
}

export default Component;
