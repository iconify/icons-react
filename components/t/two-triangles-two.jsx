import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/u/ue_tu1cee.css';
import '../../css/u/ujzvsqmlw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ue_tu1cee"/><path class="ujzvsqmlw"/></g>`,
		"fallback": "icon-park:two-triangles-two",
	});
}

export default Component;
