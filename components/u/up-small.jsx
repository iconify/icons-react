import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t57tp2bwb.css';
import '../../css/v/vso0-xb8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="t57tp2bwb"/><path class="vso0-xb8v"/></g>`,
		"fallback": "icon-park:up-small",
	});
}

export default Component;
