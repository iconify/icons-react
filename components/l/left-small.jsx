import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/irvujnzux.css';
import '../../css/h/hx47j0bao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="irvujnzux"/><path class="hx47j0bao"/></g>`,
		"fallback": "icon-park:left-small",
	});
}

export default Component;
