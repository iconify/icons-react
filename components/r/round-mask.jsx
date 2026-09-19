import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lotl-7bnj.css';
import '../../css/d/d92sc2-4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="lotl-7bnj"/><path class="d92sc2-4o"/></g>`,
		"fallback": "icon-park:round-mask",
	});
}

export default Component;
