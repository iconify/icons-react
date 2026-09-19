import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/ehgvrabkl.css';
import '../../css/b/bvx_00-9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ehgvrabkl"/><path class="bvx_00-9k"/></g>`,
		"fallback": "icon-park:level-adjustment",
	});
}

export default Component;
