import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/v/vxzkcsb0e.css';
import '../../css/a/admoqab7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="vxzkcsb0e"/><path class="admoqab7f"/></g>`,
		"fallback": "icon-park:press",
	});
}

export default Component;
