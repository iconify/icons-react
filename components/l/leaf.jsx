import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/ioca-rmze.css';
import '../../css/a/a9pnsbbfh.css';
import '../../css/x/xds6cef4b.css';
import '../../css/s/sd0_e1b4a.css';
import '../../css/m/mcnb5dgfv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ioca-rmze"/><path class="a9pnsbbfh"/><path class="xds6cef4b"/><path class="sd0_e1b4a"/><path class="mcnb5dgfv"/></g>`,
		"fallback": "icon-park:leaf",
	});
}

export default Component;
