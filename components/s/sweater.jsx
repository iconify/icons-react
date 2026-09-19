import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/d/dmbvvtk_o.css';
import '../../css/d/dt2hbi4nv.css';
import '../../css/s/sgvixgbsl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="dmbvvtk_o"/><path class="dt2hbi4nv"/><path class="sgvixgbsl"/></g>`,
		"fallback": "icon-park:sweater",
	});
}

export default Component;
